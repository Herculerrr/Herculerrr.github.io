export type Skill = 'Reception' | 'Production' | 'Interaction' | 'Mediation'

export const words = [
  { word: 'eloquent', phonetic: '/ˈeləkwənt/', meaning: '表达清晰而有说服力的', example: 'She gave an eloquent account of the journey.', skill: 'Production' as Skill, level: 'B2' },
  { word: 'deliberate', phonetic: '/dɪˈlɪbərət/', meaning: '有意识的；经过思考的', example: 'Deliberate practice turns mistakes into progress.', skill: 'Production' as Skill, level: 'B1' },
  { word: 'nuance', phonetic: '/ˈnuːɑːns/', meaning: '细微差别；微妙之处', example: 'Good listeners notice every nuance in a conversation.', skill: 'Reception' as Skill, level: 'B2' },
  { word: 'resilient', phonetic: '/rɪˈzɪliənt/', meaning: '有韧性的；能迅速恢复的', example: 'A resilient learner returns to the work tomorrow.', skill: 'Interaction' as Skill, level: 'B1' },
  { word: 'coherent', phonetic: '/kəʊˈhɪərənt/', meaning: '连贯的；条理清楚的', example: 'Try to build one coherent point before adding another.', skill: 'Mediation' as Skill, level: 'B2' },
  { word: 'articulate', phonetic: '/ɑːˈtɪkjələt/', meaning: '清楚表达的；善于表达的', example: 'She can articulate a complex idea in plain language.', skill: 'Production' as Skill, level: 'B2' },
  { word: 'perspective', phonetic: '/pəˈspektɪv/', meaning: '观点；视角', example: 'Travel gave him a wider perspective on home.', skill: 'Interaction' as Skill, level: 'B1' },
  { word: 'subtle', phonetic: '/ˈsʌtl/', meaning: '微妙的；不易察觉的', example: 'There is a subtle difference between doubt and curiosity.', skill: 'Reception' as Skill, level: 'B2' },
  { word: 'sustain', phonetic: '/səˈsteɪn/', meaning: '维持；支持', example: 'A small ritual can sustain your attention.', skill: 'Mediation' as Skill, level: 'B2' },
  { word: 'curious', phonetic: '/ˈkjʊəriəs/', meaning: '好奇的；求知的', example: 'Stay curious when a phrase feels unfamiliar.', skill: 'Reception' as Skill, level: 'A2' },
  { word: 'specific', phonetic: '/spəˈsɪfɪk/', meaning: '具体的；明确的', example: 'Give one specific example to make your point vivid.', skill: 'Production' as Skill, level: 'B1' },
  { word: 'encounter', phonetic: '/ɪnˈkaʊntə/', meaning: '遇到；邂逅', example: 'Every conversation is an encounter with another view.', skill: 'Interaction' as Skill, level: 'B1' },
  { word: 'reflect', phonetic: '/rɪˈflekt/', meaning: '反思；反映', example: 'Take two minutes to reflect on what changed.', skill: 'Mediation' as Skill, level: 'B1' },
  { word: 'clarify', phonetic: '/ˈklærɪfaɪ/', meaning: '澄清；阐明', example: 'Could you clarify what you mean by useful?', skill: 'Interaction' as Skill, level: 'B1' },
  { word: 'retain', phonetic: '/rɪˈteɪn/', meaning: '保留；记住', example: 'Use a new word today if you want to retain it.', skill: 'Mediation' as Skill, level: 'B2' },
  { word: 'fluent', phonetic: '/ˈfluːənt/', meaning: '流利的；熟练的', example: 'Fluent speech grows from many clear, small attempts.', skill: 'Production' as Skill, level: 'B1' },
  { word: 'immerse', phonetic: '/ɪˈmɜːs/', meaning: '沉浸；使专心于', example: 'Immerse yourself in one story before switching tasks.', skill: 'Reception' as Skill, level: 'B2' },
  { word: 'precise', phonetic: '/prɪˈsaɪs/', meaning: '精确的；准确的', example: 'A precise verb can make a sentence feel alive.', skill: 'Production' as Skill, level: 'B2' },
  { word: 'hesitate', phonetic: '/ˈhezɪteɪt/', meaning: '犹豫；迟疑', example: 'Do not hesitate to ask for a clearer example.', skill: 'Interaction' as Skill, level: 'B1' },
  { word: 'insight', phonetic: '/ˈɪnsaɪt/', meaning: '洞察；深刻理解', example: 'A good question can lead to an unexpected insight.', skill: 'Mediation' as Skill, level: 'B1' },
]

export const passage = {
  title: 'The Stoa at First Light',
  tag: 'A short reader · 3 min',
  body: 'Before the city wakes, the old stoa holds a different kind of conversation. Footsteps travel between the columns, a baker lifts the first shutter, and the sea answers with a low, patient rhythm. To learn here is to notice what usually passes unseen. A useful phrase is rarely a trophy; it is a small tool, ready when another person needs to understand you.',
  focus: 'notice what usually passes unseen',
}

export const prompts = {
  listening: 'Listen for the speaker’s main intention. What does the pause tell you?',
  speaking: 'Tell a partner about a place that changes how you think. Use one precise detail.',
  writing: 'Write 80–100 words: When has a useful mistake changed your learning?',
}

export const week = [
  { day: 'Mon', minutes: 18, active: true }, { day: 'Tue', minutes: 24, active: true },
  { day: 'Wed', minutes: 31, active: true }, { day: 'Thu', minutes: 12, active: true },
  { day: 'Fri', minutes: 26, active: true }, { day: 'Sat', minutes: 0, active: false }, { day: 'Sun', minutes: 0, active: false },
]

export const starterTasks = [
  { id: 'listen', label: 'Listen & notice', detail: 'Reception · 6 min', icon: 'headphones' },
  { id: 'recall', label: 'Retrieve phrases', detail: 'Mediation · 8 min', icon: 'cards' },
  { id: 'speak', label: 'Shadow a voice', detail: 'Production · 5 min', icon: 'microphone' },
]
