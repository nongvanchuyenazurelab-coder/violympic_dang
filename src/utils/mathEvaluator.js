// Smart Math Evaluator & Grader for Primary School Grade 2

/**
 * Normalizes user input text:
 * - strips whitespace and lowercase
 * - strips prefix like "x =", "y =", "a =", "b =", "đáp án =", "số cần tìm ="
 * - strips common Vietnamese units like "cm", "dm", "kg", "l", "lít", "quyển", "viên", "quả", "con", "bạn", "tuổi"
 */
export function normalizeAnswer(input) {
  if (input === null || input === undefined) return ''
  let text = String(input).trim().toLowerCase()

  // Replace commas in decimals or spaces
  text = text.replace(/,/g, '.')

  // Check if comparison symbol
  if (text === '>' || text === '<' || text === '=') {
    return text
  }

  // Remove common variable prefixes: "x = 45", "a=12", "y = 3"
  text = text.replace(/^[a-z]\s*=\s*/i, '')
  text = text.replace(/^đáp\s*án\s*[:=]\s*/i, '')
  text = text.replace(/^kết\s*quả\s*[:=]\s*/i, '')
  text = text.replace(/^số\s*cần\s*tìm\s*[:=]\s*/i, '')

  // Remove unit suffixes if any
  text = text.replace(/\s*(cm|dm|m|kg|l|lít|quyển|viên|quả|con|bạn|tuổi|nghìn\s*đồng|đồng|chiếc|bông)\.?$/i, '')
  text = text.trim()

  return text
}

/**
 * Evaluates a fill_blank or general math answer.
 * Handles numeric values, arrays of accepted answers, equations, or comparison operators.
 */
export function evaluateAnswer(userAns, correctAns, question = {}) {
  const normUser = normalizeAnswer(userAns)
  if (normUser === '') {
    return {
      isCorrect: false,
      isEmpty: true,
      userNormalized: '',
      score: 0
    }
  }

  // If correctAns is an array of acceptable answers
  if (Array.isArray(correctAns)) {
    for (const cand of correctAns) {
      if (cand === undefined || cand === null) continue
      const normCand = normalizeAnswer(cand)
      if (normUser === normCand) {
        return { isCorrect: true, isEmpty: false, userNormalized: normUser, score: 10 }
      }
      // Check numeric equivalence
      const numUser = parseFloat(normUser)
      const numCand = parseFloat(normCand)
      if (!isNaN(numUser) && !isNaN(numCand) && Math.abs(numUser - numCand) < 0.0001) {
        return { isCorrect: true, isEmpty: false, userNormalized: normUser, score: 10 }
      }
    }
    return { isCorrect: false, isEmpty: false, userNormalized: normUser, score: 0 }
  }

  // Single correct answer
  const normCorrect = normalizeAnswer(correctAns)

  // Direct normalized string match
  if (normUser === normCorrect) {
    return { isCorrect: true, isEmpty: false, userNormalized: normUser, score: 10 }
  }

  // Check numeric equivalence (e.g. "05" vs "5", "12.0" vs "12")
  const numUser = parseFloat(normUser)
  const numCorrect = parseFloat(normCorrect)
  if (!isNaN(numUser) && !isNaN(numCorrect) && Math.abs(numUser - numCorrect) < 0.0001) {
    return { isCorrect: true, isEmpty: false, userNormalized: normUser, score: 10 }
  }

  // Special case: sequence string e.g. "2, 6, 14, 17" or "2;6;14;17" or "2 6 14 17"
  if (question.type === 'sequence') {
    const cleanSeq = str => str.replace(/[,;. -]+/g, ' ').trim()
    if (cleanSeq(normUser) === cleanSeq(normCorrect)) {
      return { isCorrect: true, isEmpty: false, userNormalized: normUser, score: 10 }
    }
  }

  return { isCorrect: false, isEmpty: false, userNormalized: normUser, score: 0 }
}

/**
 * Calculates ascending ranks for a matrix order problem.
 * Takes array of items `{ id, text, value }`
 * Returns array with expected rank for each item (1-indexed).
 * Ties are handled fairly (items with same value can accept ranks in range).
 */
export function calculateMatrixRanks(items) {
  // Sort copies by value
  const sorted = items
    .map((item, originalIndex) => ({
      originalIndex,
      id: item.id,
      text: item.text,
      value: Number(item.value)
    }))
    .sort((a, b) => a.value - b.value)

  // Assign standard 1-based ranks
  const ranks = new Array(items.length)
  sorted.forEach((item, sortedIndex) => {
    ranks[item.originalIndex] = sortedIndex + 1
  })

  return {
    sortedList: sorted,
    ranks
  }
}

/**
 * Grades a matrix order question.
 * userAnswers: object mapping { [cellIndex]: rankNumber }
 * items: array of items { id, text, value }
 */
export function gradeMatrixOrder(userAnswers = {}, items = []) {
  if (!items || items.length === 0) return { score: 0, total: 0, details: [] }

  const { sortedList } = calculateMatrixRanks(items)

  // Group items by value to handle duplicates/ties properly
  const valToAllowedRanks = {}
  sortedList.forEach((item, idx) => {
    if (!valToAllowedRanks[item.value]) {
      valToAllowedRanks[item.value] = []
    }
    valToAllowedRanks[item.value].push(idx + 1)
  })

  let correctCount = 0
  const details = items.map((item, index) => {
    const userRank = parseInt(userAnswers[index], 10)
    const allowedRanks = valToAllowedRanks[item.value] || []
    const isCorrect = allowedRanks.includes(userRank)
    if (isCorrect) correctCount++

    return {
      index,
      text: item.text,
      value: item.value,
      userRank: isNaN(userRank) ? null : userRank,
      expectedRank: allowedRanks[0],
      allowedRanks,
      isCorrect
    }
  })

  const score = Math.round((correctCount / items.length) * 10)
  return {
    score,
    correctCount,
    totalCount: items.length,
    isFullyCorrect: correctCount === items.length,
    details,
    sortedSolution: sortedList
  }
}

/**
 * Grades vertical arithmetic question
 * missingBoxes: array of { id, correctDigit, position }
 * userAnswers: object { [boxId]: digit }
 */
export function gradeVerticalMath(userAnswers = {}, missingBoxes = []) {
  let correctCount = 0
  const details = missingBoxes.map(box => {
    const userVal = String(userAnswers[box.id] ?? '').trim()
    const isCorrect = userVal === String(box.correctDigit)
    if (isCorrect) correctCount++
    return {
      id: box.id,
      userVal,
      correctDigit: box.correctDigit,
      isCorrect
    }
  })

  return {
    isFullyCorrect: correctCount === missingBoxes.length && missingBoxes.length > 0,
    score: missingBoxes.length > 0 ? Math.round((correctCount / missingBoxes.length) * 10) : 0,
    details
  }
}
