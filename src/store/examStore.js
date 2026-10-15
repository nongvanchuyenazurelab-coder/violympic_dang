import { reactive, watch } from 'vue'
import { QUESTIONS_BANK, ROUNDS_METADATA } from '../data/questionsData'
import { generateExamByConfig } from '../utils/questionGenerator'
import { evaluateAnswer, gradeMatrixOrder, gradeVerticalMath } from '../utils/mathEvaluator'
import { soundManager } from '../utils/soundEffects'
import { triggerConfetti } from '../utils/confetti'

const STORAGE_KEYS = {
  ACTIVE_EXAM: 'violympic_active_exam',
  HISTORY: 'violympic_history',
  WRONG_QUESTIONS: 'violympic_wrong_questions',
  STUDENT_NAME: 'violympic_student_name',
  STUDENT_AVATAR: 'violympic_student_avatar'
}

export const examStore = reactive({
  currentView: 'home', // 'home' | 'rounds' | 'topics' | 'exam' | 'result' | 'parent'
  studentName: 'Bé Yêu',
  studentAvatar: '🦁',

  // Current Exam State
  exam: null,
  userAnswers: {}, // { [questionId]: answerValue }
  timeElapsed: 0,
  timerInterval: null,
  isTimerRunning: false,
  timeLimit: 1200, // 20 minutes default (0 for untimed)

  // Last Result
  lastResult: null,

  // Exam History & Stats
  history: [],
  wrongQuestionsBank: {}, // { [questionId]: questionObject }

  init() {
    // Load student profile
    const savedName = localStorage.getItem(STORAGE_KEYS.STUDENT_NAME)
    if (savedName) this.studentName = savedName

    const savedAvatar = localStorage.getItem(STORAGE_KEYS.STUDENT_AVATAR)
    if (savedAvatar) this.studentAvatar = savedAvatar

    // Load History
    try {
      const savedHist = localStorage.getItem(STORAGE_KEYS.HISTORY)
      if (savedHist) this.history = JSON.parse(savedHist)
    } catch {
      this.history = []
    }

    // Load Wrong Questions Bank
    try {
      const savedWrong = localStorage.getItem(STORAGE_KEYS.WRONG_QUESTIONS)
      if (savedWrong) this.wrongQuestionsBank = JSON.parse(savedWrong)
    } catch {
      this.wrongQuestionsBank = {}
    }

    // Restore active exam if in progress
    try {
      const savedActive = localStorage.getItem(STORAGE_KEYS.ACTIVE_EXAM)
      if (savedActive) {
        const parsed = JSON.parse(savedActive)
        if (parsed && parsed.exam && parsed.status === 'in_progress') {
          this.exam = parsed.exam
          this.userAnswers = parsed.userAnswers || {}
          this.timeElapsed = parsed.timeElapsed || 0
          this.timeLimit = parsed.timeLimit || 1200
          this.currentView = 'exam'
          this.startTimer()
        }
      }
    } catch {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_EXAM)
    }
  },

  setStudentProfile(name, avatar) {
    this.studentName = name || 'Bé Yêu'
    if (avatar) this.studentAvatar = avatar
    localStorage.setItem(STORAGE_KEYS.STUDENT_NAME, this.studentName)
    localStorage.setItem(STORAGE_KEYS.STUDENT_AVATAR, this.studentAvatar)
  },

  navigate(view) {
    soundManager.playClick()
    this.currentView = view
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },

  // Start exam by standard round (e.g. 'vong-1', 'vong-2', ...)
  startRoundExam(roundId) {
    const meta = ROUNDS_METADATA.find(r => r.id === roundId)
    const questions = QUESTIONS_BANK.filter(q => q.round === roundId)

    this.exam = {
      id: `round_${roundId}_${Date.now()}`,
      title: meta ? meta.name : `Đề Thi Violympic ${roundId.toUpperCase()}`,
      description: meta ? meta.description : '',
      roundId,
      type: 'round',
      questions: questions.length > 0 ? questions : QUESTIONS_BANK.slice(0, 15)
    }

    this.userAnswers = {}
    this.timeElapsed = 0
    this.timeLimit = 1200 // 20 minutes
    this.currentView = 'exam'
    this.startTimer()
    this.saveActiveExam()
    soundManager.playClick()
  },

  // Start customized generated exam
  startCustomExam(config) {
    const generated = generateExamByConfig(config)
    this.exam = {
      ...generated,
      roundId: 'custom',
      description: `Đề luyện tập ${config.count || 15} câu - ${config.topic || 'Tổng hợp'}`
    }
    this.userAnswers = {}
    this.timeElapsed = 0
    this.timeLimit = config.timeLimit ?? 1200
    this.currentView = 'exam'
    this.startTimer()
    this.saveActiveExam()
    soundManager.playClick()
  },

  // Start exam by practicing questions user got wrong previously
  startReviewWrongExam() {
    const wrongList = Object.values(this.wrongQuestionsBank)
    if (wrongList.length === 0) return false

    this.exam = {
      id: `review_wrong_${Date.now()}`,
      title: 'Đề Ôn Tập Các Câu Từng Làm Chưa Đúng',
      description: `Gồm ${wrongList.length} câu bé cần củng cố lại kiến thức`,
      roundId: 'review_wrong',
      type: 'review_wrong',
      questions: wrongList
    }
    this.userAnswers = {}
    this.timeElapsed = 0
    this.timeLimit = 0 // Untimed for relaxed review
    this.currentView = 'exam'
    this.startTimer()
    this.saveActiveExam()
    soundManager.playClick()
    return true
  },

  setAnswer(questionId, value) {
    this.userAnswers[questionId] = value
    this.saveActiveExam()
  },

  saveActiveExam() {
    if (!this.exam) return
    const state = {
      exam: this.exam,
      userAnswers: this.userAnswers,
      timeElapsed: this.timeElapsed,
      timeLimit: this.timeLimit,
      status: 'in_progress'
    }
    localStorage.setItem(STORAGE_KEYS.ACTIVE_EXAM, JSON.stringify(state))
  },

  clearActiveExam() {
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_EXAM)
  },

  startTimer() {
    this.stopTimer()
    this.isTimerRunning = true
    this.timerInterval = setInterval(() => {
      this.timeElapsed++
      // If timeLimit is set (> 0) and exceeded: auto submit!
      if (this.timeLimit > 0 && this.timeElapsed >= this.timeLimit) {
        this.submitExam()
      }
    }, 1000)
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval)
      this.timerInterval = null
    }
    this.isTimerRunning = false
  },

  // Grade and finish the exam
  submitExam() {
    this.stopTimer()
    if (!this.exam) return

    const questions = this.exam.questions || []
    let totalScore = 0
    let correctCount = 0
    let wrongCount = 0
    let unattemptedCount = 0

    const gradedQuestions = questions.map((q, index) => {
      const userAns = this.userAnswers[q.id]
      let evaluation = { isCorrect: false, score: 0 }

      if (q.type === 'matrix_order') {
        const matrixRes = gradeMatrixOrder(userAns || {}, q.items || [])
        evaluation = {
          isCorrect: matrixRes.isFullyCorrect,
          score: matrixRes.score,
          matrixDetails: matrixRes.details,
          sortedSolution: matrixRes.sortedSolution
        }
      } else if (q.type === 'vertical_math') {
        const boxes = []
        // collect missing boxes
        q.topDigits.forEach(d => { if (typeof d === 'object') boxes.push({ id: d.id, correctDigit: d.correct }) })
        q.bottomDigits.forEach(d => { if (typeof d === 'object') boxes.push({ id: d.id, correctDigit: d.correct }) })
        const vertRes = gradeVerticalMath(userAns || {}, boxes)
        evaluation = {
          isCorrect: vertRes.isFullyCorrect,
          score: vertRes.score,
          verticalDetails: vertRes.details
        }
      } else if (q.type === 'match_pairs') {
        const totalPairs = q.pairs?.length || 0
        const matched = userAns?.matchedPairsCount || 0
        const isAll = matched === totalPairs && totalPairs > 0
        evaluation = {
          isCorrect: isAll,
          score: isAll ? 10 : Math.round((matched / totalPairs) * 10)
        }
      } else {
        // fill_blank or multiple_choice or sequence
        const res = evaluateAnswer(userAns, q.correctAnswer, q)
        evaluation = {
          isCorrect: res.isCorrect,
          isEmpty: res.isEmpty,
          score: res.score
        }
      }

      const isAttempted = userAns !== undefined && userAns !== null && userAns !== ''
      if (!isAttempted) {
        unattemptedCount++
      } else if (evaluation.isCorrect) {
        correctCount++
        // If question was in wrong bank and answered correctly now, remove it!
        if (this.wrongQuestionsBank[q.id]) {
          delete this.wrongQuestionsBank[q.id]
        }
      } else {
        wrongCount++
        // Store in wrong questions bank for future review
        this.wrongQuestionsBank[q.id] = q
      }

      totalScore += evaluation.score

      return {
        ...q,
        index: index + 1,
        userAnswer: userAns,
        evaluation
      }
    })

    const maxScore = questions.length * 10
    const accuracy = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0

    // Save updated wrong bank
    localStorage.setItem(STORAGE_KEYS.WRONG_QUESTIONS, JSON.stringify(this.wrongQuestionsBank))

    const result = {
      examId: this.exam.id,
      title: this.exam.title,
      roundId: this.exam.roundId,
      date: new Date().toISOString(),
      score: totalScore,
      maxScore,
      correctCount,
      wrongCount,
      unattemptedCount,
      totalCount: questions.length,
      accuracy,
      timeElapsed: this.timeElapsed,
      gradedQuestions
    }

    this.lastResult = result

    // Save into history
    this.history.unshift(result)
    // Keep last 50 exams
    if (this.history.length > 50) this.history = this.history.slice(0, 50)
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(this.history))

    this.clearActiveExam()
    this.currentView = 'result'

    // Celebration sounds and confetti
    if (accuracy >= 80) {
      soundManager.playFanfare()
      triggerConfetti()
    } else if (accuracy >= 50) {
      soundManager.playSuccess()
    } else {
      soundManager.playWrong()
    }
  },

  // Clear all past history
  clearHistory() {
    this.history = []
    this.wrongQuestionsBank = {}
    localStorage.removeItem(STORAGE_KEYS.HISTORY)
    localStorage.removeItem(STORAGE_KEYS.WRONG_QUESTIONS)
  }
})

examStore.init()
