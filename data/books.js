/* Future Tense Reading Dashboard — content and configuration.
   Edit SITE_URL to point to your store. Add books to BOOKS. */

export const PUBLISHER = "Future Tense Publishing";
export const TAGLINE = "Simple. Sincere. Sacred.";
export const SITE_URL = "https://mytheologyscrapbook.wordpress.com";

export const CATEGORIES = ["Faith & Belief", "Faith & Scripture", "Faith & Culture", "Faith & Life"];

/* BOOK DATA — add a new book by adding one object here.
   Each idea: { title, text (50–80 words), ref, question }
   Optional per idea: greek, part, practice[], prayer, prompts[]
   Optional per book: unitLabel ("Day"), calendar { month, firstDay } for a dated reading plan
*/
export const BOOKS = [
  {
    id: "advent-devotions",
    title: "Advent Devotions",
    subtitle: "25 days, 25 Greek words",
    author: "Samuel Thambusamy",
    category: "Faith & Scripture",
    status: "available",
    featured: true,
    unitLabel: "Day",
    calendar: { month: 12, firstDay: 1 },
    buyUrl: SITE_URL,
    palette: { bg: "#4A120B", fg: "#F5A536", sun: "#DA7028", sun2: "#FBE9C9" },
    blurb: "Twenty-five short Advent readings, each built around one Greek word of the Christmas story, from Gennēsis (birth) to Parousia (return).",
    ideas: [
      {
            "title": "Beginning",
            "greek": "Γέννησις · Gennēsis",
            "part": "The Heart Awakens",
            "ref": "Matthew 1:18–25",
            "text": "Génnēsis means birth, the arrival of new life. The birth of Jesus is a historical moment, but it is also God leaning toward you and saying, “You can begin again.” Mary and Joseph’s plans were interrupted and their future uncertain, yet God was at work in their ordinary lives. God’s new beginnings rarely wait for perfect conditions. In Christ, your story is never closed.",
            "question": "Where in your life do you most need a new beginning?",
            "prompts": [
                  "What old fear, habit, or heaviness might God be inviting you to release?",
                  "How would your days look different if you believed your story is still open to God's renewal?"
            ],
            "practice": [
                  "Name one part of your life where you long for a fresh beginning. Bring it before God without trying to solve everything at once."
            ],
            "prayer": "Lord, let Your new beginning be born in me. Renew my hope, restore my courage, and help me trust You with the unfinished chapters of my life. Amen."
      },
      {
            "title": "Expectation",
            "greek": "Προσδοκία · Prosdokia",
            "part": "The Heart Awakens",
            "ref": "Luke 2:25–38",
            "text": "Prosdokia means expectation: looking forward to something that has not yet happened. Advent is a season of holy expectation, remembering Christ’s first coming and awaiting His return. Simeon and Anna waited for years, sustained by prayer, worship and faithfulness, until they recognised something extraordinary in an ordinary child. Your quiet longing for more can become the place where prayer begins. Keep expecting. God is still at work.",
            "question": "Where in my life do I feel a quiet longing for something more?",
            "prompts": [
                  "What hopes have I pushed aside because they felt too small, too late, or too risky?",
                  "How would my life change if I approached each day with renewed expectation?"
            ],
            "practice": [
                  "Reflect on something you have stopped expecting from God. Bring that longing honestly before Him.",
                  "Throughout the day, look for one small reminder of God's faithfulness."
            ],
            "prayer": "Lord, awaken my longing and prepare my heart for what You are bringing. Teach me to wait with patience, live with hope, and remain open to Your purposes. Amen."
      },
      {
            "title": "Hope",
            "greek": "Ἐλπίς · Elpis",
            "part": "The Heart Awakens",
            "ref": "Romans 15:13",
            "text": "Elpis is the confident expectation that comes from trusting God’s promises. It is possible even when life gives us little reason to feel hopeful. Perhaps prayers remain unanswered or someone has disappointed you. The birth of Jesus is God’s assurance that darkness will not have the final word. Hope gives us courage to face another day. Your tomorrow is held in Christ’s faithful hands.",
            "question": "Where in my life do I feel hope fading, and what is weighing it down?",
            "prompts": [
                  "When have I experienced God restoring hope in me before?",
                  "How would my outlook change if I truly believed that Christ is with me in every tomorrow?"
            ],
            "practice": [
                  "Identify one area of your life where discouragement has weakened your hope. Bring it honestly before God.",
                  "Recall one occasion when God sustained you through a difficult season. Let that memory encourage you today."
            ],
            "prayer": "Lord, fill my heart with hope again. Strengthen me where I feel discouraged, remind me of Your faithfulness, and help me trust You with the days ahead. Amen."
      },
      {
            "title": "Covenant",
            "greek": "Διαθήκη · Diathēkē",
            "part": "The Heart Awakens",
            "ref": "Luke 1:67–75",
            "text": "Diathēkē means covenant: a binding relationship built on promises. Zechariah praised God for remembering His holy covenant. The coming of Jesus belongs to a much older story of God’s faithfulness. When others break their promises, trusting God can feel difficult too. Yet God keeps His word. Advent also invites us to become trustworthy people, honest about our limits and faithful in the commitments we make.",
            "question": "Where am I finding it difficult to trust God's faithfulness?",
            "prompts": [
                  "What does God's covenant with Abraham teach me about His faithfulness?",
                  "Where do I need to become more faithful in my own commitments?"
            ],
            "practice": [
                  "Read Luke 1:67–75. Notice what Zechariah remembers about God's promises.",
                  "Honour one commitment you have made, or explain honestly why you cannot fulfil it."
            ],
            "prayer": "Lord, thank You for keeping Your covenant promises through Jesus Christ. Help me trust Your faithfulness when life is uncertain, and teach me to keep my word to others. Amen."
      },
      {
            "title": "Fullness of Time",
            "greek": "Πλήρωμα · Plērōma",
            "part": "The Heart Awakens",
            "ref": "Galatians 4:4",
            "text": "Plērōma means fullness or completeness. Paul uses it to describe the timing of Christ’s coming: when the fullness of time had come, God sent His Son. The birth of Jesus was not random; it happened at a chosen moment in God’s unfolding story. Waiting for answers can be exhausting. But we can entrust our days, and our impatience, to the God who holds time in His hands.",
            "question": "Where in my life do I feel that time is moving too slowly?",
            "prompts": [
                  "When have I recognised God's faithfulness through an unexpected turn in my life?",
                  "What would change if I learned to live faithfully in God's time rather than constantly rushing ahead?"
            ],
            "practice": [
                  "Identify one area of your life where waiting has made you anxious or impatient. Bring your concerns before God and surrender your expectations about when things should happen.",
                  "Choose one meaningful thing you can do today instead of worrying about what tomorrow might bring."
            ],
            "prayer": "Lord, teach me to trust Your timing. Give me patience when life moves slowly, wisdom to use my days well, and faith to believe that Your purposes are greater than my plans. Amen."
      },
      {
            "title": "Messenger",
            "greek": "Ἄγγελος · Angelos",
            "part": "God Comes Near",
            "ref": "Luke 2:8–14",
            "text": "Angelos means messenger. To frightened shepherds, an angel announced good news of great joy: a Saviour has been born. God’s messages often arrive in the middle of ordinary days, as Gabriel’s did for Mary. Fear, noise and busyness can keep us from listening. Advent invites us to hear God’s Word again, receive it with faith, and become messengers of hope and reassurance to others.",
            "question": "What message from the Christmas story do I most need to hear today?",
            "prompts": [
                  "When has a message from Scripture brought comfort, guidance, or encouragement into my life?",
                  "How can I become more attentive and responsive to God's message during Advent?"
            ],
            "practice": [
                  "Read Luke 2:8–14 slowly. Pay attention to the angel's announcement and consider what the message reveals about Jesus. Ask yourself how you can respond to this good news today.",
                  "Share one meaningful truth about Christmas with someone today. Let your words bring encouragement, hope, or reassurance."
            ],
            "prayer": "Lord, thank You for the wonderful message of Christ's coming. Open my ears to hear Your Word and my heart to receive Your truth. Help me overcome the fears and distractions that keep me from listening. Give me faith to respond to Your message and courage to share Your good news with others. Amen."
      },
      {
            "title": "Lowliness",
            "greek": "Ταπείνωσις · Tapeinōsis",
            "part": "God Comes Near",
            "ref": "Luke 1:46–55",
            "text": "Tapeinōsis means lowliness or humble condition. In her song, Mary rejoices that God has looked with favour on the lowliness of His servant. She was an ordinary young woman from Nazareth, yet God chose her. God does not measure people by wealth, status or achievement. If you feel unnoticed, God sees you. Mary’s song also invites us to honour the dignity of those others overlook.",
            "question": "Where in my life do I feel overlooked or insignificant?",
            "prompts": [
                  "What does Mary's response to God's favour teach me about humility?",
                  "Who are the people I tend to overlook in everyday life?"
            ],
            "practice": [
                  "Reflect on an area where you feel unnoticed or unappreciated.",
                  "Express genuine appreciation to one person whose work you usually take for granted."
            ],
            "prayer": "Lord, thank You for seeing and valuing me. Help me find my worth in Your love rather than in the recognition of others. Give me a humble heart and teach me to appreciate those whose contributions often go unnoticed. Amen."
      },
      {
            "title": "Manger",
            "greek": "Φάτνη · Phatnē",
            "part": "God Comes Near",
            "ref": "Luke 2:7",
            "text": "Phatnē is a manger, a feeding trough for animals. Mary laid the newborn Jesus in one because there was no suitable guest room. The One through whom all things were created entered the world in a simple, borrowed place. A king might be born in a palace; Christ came among the ordinary. The manger reminds us that God meets us in humble, imperfect circumstances and everyday routines.",
            "question": "Where do I feel that my life or circumstances are too ordinary for God to use?",
            "prompts": [
                  "How would my daily life change if I believed God could meet me in the ordinary?"
            ],
            "practice": [
                  "Identify one ordinary part of your life that you often overlook or consider insignificant. Offer it to God in prayer.",
                  "Choose one ordinary task today and do it with gratitude, remembering that even simple acts can become expressions of love and faithfulness."
            ],
            "prayer": "Lord Jesus, You entered our world in humility and were laid in a manger. Thank You for reminding me that ordinary life matters to You. Open my eyes to recognise Your presence in my daily routines. Help me serve You faithfully in the small things and find joy in the life You have given me. Amen."
      },
      {
            "title": "Incarnation",
            "greek": "Ἐνανθρώπησις · Enanthrōpēsis",
            "part": "God Comes Near",
            "ref": "John 1:14",
            "text": "Enanthrōpēsis means becoming human: the eternal Son of God becoming fully human in Jesus. Like every newborn, He needed to be fed, carried and cared for. He grew in wisdom and stature and knew weariness and tears. Our need for rest, relationships, nourishment and care is not unspiritual. The Incarnation reveals the dignity of human life and God’s wonderful willingness to enter it.",
            "question": "Which aspects of my humanity do I find most difficult to accept?",
            "prompts": [
                  "Which experiences from the human life of Jesus speak most meaningfully to my present circumstances?",
                  "How would my life change if I learned to accept my humanity while following the example of Jesus?"
            ],
            "practice": [
                  "Reflect on one ordinary human experience you have been struggling to accept. It might be tiredness, disappointment, emotional weakness, or the need for help.",
                  "Respond kindly to one of your human needs. Take time to rest, ask for help, or show compassion to someone who is struggling."
            ],
            "prayer": "Lord Jesus, You became human and shared our life. Thank You for understanding my weaknesses, weariness, and struggles. Help me accept my humanity with humility and bring every part of my life before You. Teach me to follow Your example and trust Your care. Amen."
      },
      {
            "title": "Shepherd",
            "greek": "Ποιμήν · Poimēn",
            "part": "God Comes Near",
            "ref": "Luke 2:8–20",
            "text": "Poimēn means shepherd. Shepherds, doing patient and unnoticed work through the night, were among the first to hear of Jesus’ birth. God’s attention is not reserved for the powerful or important. They heard, went to see, and returned glorifying God. The child they found would one day call Himself the good shepherd. We too are called to hear, respond and share what we discover.",
            "question": "Where in my life do I sometimes feel too ordinary, unnoticed, or insignificant?",
            "prompts": [
                  "What does the announcement to the shepherds teach me about the people God values?",
                  "How can I respond to Christ like the shepherds who heard, believed, and shared the good news?"
            ],
            "practice": [
                  "Remember how God chose the shepherds to receive the wonderful news of Jesus' birth.",
                  "Think about one ordinary responsibility or role in your life where you sometimes feel unnoticed or unimportant.",
                  "Encourage someone whose ordinary work often goes unnoticed. Let them know that their contribution matters."
            ],
            "prayer": "Lord Jesus, thank You for seeing and valuing ordinary people. Help me recognise Your presence in my daily responsibilities. Free me from the need to seek recognition, and teach me to serve You faithfully wherever You have placed me. Lead me as my Good Shepherd, and help me share Your love with others. Amen."
      },
      {
            "title": "Glory",
            "greek": "Δόξα · Doxa",
            "part": "Recognising the Child",
            "ref": "Luke 2:14",
            "text": "Doxa means glory: God’s majesty, splendour and presence. On an ordinary night outside Bethlehem, angels proclaimed, “Glory to God in the highest.” Yet God’s glory was revealed through a child born in humble circumstances. Advent invites us to look for God’s glory in places we might overlook. Encountering it changes how we see ordinary life and gives us reason to wonder, worship and rejoice.",
            "question": "Where have I recently caught a glimpse of God's glory in my everyday life?",
            "prompts": [
                  "Which areas of my life feel dim or heavy, and where do I long to see God's glory?",
                  "How can I become more attentive to God's glory in ordinary moments?"
            ],
            "practice": [
                  "Slow down and notice one ordinary moment that reminds you of God's goodness, beauty, or presence. Pause and offer a simple prayer of praise.",
                  "Share something you are grateful for with another person today."
            ],
            "prayer": "Lord, open my eyes to Your glory. Help me recognise Your beauty in the ordinary moments of life. Fill my heart with wonder, gratitude, and praise. Amen."
      },
      {
            "title": "Star",
            "greek": "Ἀστήρ · Astēr",
            "part": "Recognising the Child",
            "ref": "Matthew 2:1–12",
            "text": "Astēr means star. A remarkable star guided the Magi until it stopped over the place where the child was. Perhaps you wish God would show you exactly what to do next. The Magi moved forward step by step, without knowing everything. When they arrived, the star had done its work, and they worshipped Jesus. Guidance matters, but the One we are seeking matters more.",
            "question": "Where in my life do I most need God's guidance right now?",
            "prompts": [
                  "How has God guided me through Scripture, prayer, or wise counsel in the past?",
                  "How can I become more attentive to God's guidance during this Advent season?"
            ],
            "practice": [
                  "Identify one decision or situation where you are seeking God's guidance.",
                  "Consider what you already know and what further wisdom you may need. Take one thoughtful step today toward a decision or responsibility you have been postponing. Let prayer, Scripture, and wise counsel guide your response."
            ],
            "prayer": "Lord Jesus, You are the Light of the World. Guide me when the road ahead is unclear. Give me wisdom to recognise what is right, patience when answers are delayed, and courage to follow Your truth. Help me trust Your guidance and draw closer to You with every step. Amen."
      },
      {
            "title": "Wise Men",
            "greek": "Μάγοι · Magoi",
            "part": "Recognising the Child",
            "ref": "Matthew 2:1–2",
            "text": "The Magoi were learned men from the East who studied the skies. They arrived in Jerusalem with an extraordinary question: “Where is the one who has been born king of the Jews?” Their curiosity became a journey. Your questions and doubts can do the same when you bring them honestly to God. When the Magi found Jesus, they worshipped, gave gifts and went home by another route.",
            "question": "What am I currently seeking most deeply in my life?",
            "prompts": [
                  "What familiar comforts, assumptions, or routines might I need to reconsider as I seek God?",
                  "How has God guided me in the past when I took a step of faith without having all the answers?"
            ],
            "practice": [
                  "Identify one question, longing, or uncertainty that has become part of your spiritual journey. Instead of ignoring it or demanding an immediate answer, bring it honestly before God.",
                  "Take one small step in your search for God today. Read a passage of Scripture, explore a question about your faith, or have a meaningful conversation with someone who can encourage your spiritual journey."
            ],
            "prayer": "Lord Jesus, awaken in me a sincere desire to seek You. Guide me through my questions and uncertainties. Give me courage to follow Your truth, humility to receive Your guidance, and faith to respond when You lead me. May my seeking always bring me closer to You. Amen."
      },
      {
            "title": "Word",
            "greek": "Λόγος · Logos",
            "part": "Recognising the Child",
            "ref": "John 1:1–14",
            "text": "Logos means Word. John describes Jesus as the eternal Word who was with God, who is God, and through whom all things were made. Then the Word became flesh and lived among us. If you have wondered what God is really like, look at Jesus. Receiving Him makes us children of God, and His grace slowly shapes how we think, speak and live.",
            "question": "What does it mean to me personally that the eternal Word became flesh and entered our world?",
            "prompts": [
                  "Where in my life do I struggle to receive Christ and trust His grace?",
                  "How would my daily life change if I lived more fully as someone who has received Christ?"
            ],
            "practice": [
                  "Read John 1:1–14 slowly. Pay particular attention to verses 11–12, where John speaks about receiving Christ.",
                  "Choose one teaching of Jesus that you can put into practice today as an expression of your faith in Him."
            ],
            "prayer": "Lord Jesus, You are the eternal Word who became flesh and lived among us. Thank You for revealing the Father's love and inviting me into His family. Help me receive You with faith, trust Your grace, and allow Your truth to shape my life. Teach me to live each day as a child of God. Amen."
      },
      {
            "title": "God With Us",
            "greek": "Ἐμμανουήλ · Emmanouēl",
            "part": "Recognising the Child",
            "ref": "Matthew 1:23",
            "text": "Emmanouēl means God with us. These three words carry a wonderful assurance: God has not remained distant. In Jesus, He entered our world and shared our joys, struggles and sorrows. There are seasons when God seems far away and prayers seem to go unanswered. God’s nearness does not make every problem disappear, but it means you never face life’s uncertainties alone.",
            "question": "Where in my life do I most need to remember that God is with me?",
            "prompts": [
                  "How have I sensed God's nearness in unexpected or quiet ways this year?",
                  "What would change in my daily life if I truly believed that I am never alone?"
            ],
            "practice": [
                  "Pause wherever you are and remind yourself of the name Emmanuel: God with us.",
                  "Reach out to someone who may be feeling alone. Let your kindness remind them of God's care."
            ],
            "prayer": "Lord, help me recognise Your nearness today. Be with me in my fears, my struggles, and my quiet moments. Teach me to trust Your presence, even when I cannot feel it. Amen."
      },
      {
            "title": "Light",
            "greek": "Φῶς · Phōs",
            "part": "Receiving What Christ Brings",
            "ref": "John 8:12",
            "text": "Phōs means light, the light that reveals, guides and brings life. Jesus declared, “I am the light of the world.” In Christ, God brings truth where there is confusion, hope where there is despair, and direction where the path is unclear. You may still have unanswered questions, and circumstances may not change immediately. Yet you can keep walking with Christ. Let His light lead you again.",
            "question": "Where in my life do I feel the most darkness or uncertainty right now?",
            "prompts": [
                  "When have I experienced God bringing clarity, comfort, or direction during a confusing season?",
                  "What small step can I take this week to walk more fully in God's light?"
            ],
            "practice": [
                  "Identify one area of your life where you need God's light. It may be a difficult decision, an unspoken fear, or something you have been avoiding. Bring it honestly before Him.",
                  "Take one small step toward something you know God is calling you to do."
            ],
            "prayer": "Lord, shine Your light into every place where I feel afraid, uncertain, or alone. Reveal what I need to see, guide me in Your truth, and give me courage to follow You. Amen."
      },
      {
            "title": "Saviour",
            "greek": "Σωτήρ · Sōtēr",
            "part": "Receiving What Christ Brings",
            "ref": "Luke 2:11",
            "text": "Sōtēr means Saviour, the One who brings deliverance. The angel announced that a Saviour had been born in the city of David. Most of us know the limits of self-improvement: good intentions fade and old patterns return. Jesus came to meet humanity’s deepest need. His saving grace forgives us and, through the Holy Spirit, transforms our attitudes, relationships and choices. We need not depend on our own strength.",
            "question": "Where in my life do I most need the saving grace of Jesus?",
            "prompts": [
                  "What does the birth of Jesus as Saviour mean to me personally?",
                  "How is God's saving grace changing the way I live?"
            ],
            "practice": [
                  "Reflect on an area where you have been struggling to change through your own efforts. Bring it honestly before Christ.",
                  "Take one practical step towards a change that reflects your faith in Christ."
            ],
            "prayer": "Lord Jesus, thank You for coming into our world as Saviour. Forgive my sins and renew my life. Help me trust Your saving grace rather than my own strength. Teach me to follow You faithfully. Amen."
      },
      {
            "title": "Grace",
            "greek": "Χάρις · Charis",
            "part": "Receiving What Christ Brings",
            "ref": "John 1:16",
            "text": "Charis means grace: God’s generous kindness and favour, freely given rather than earned. From Christ’s fullness we have received grace upon grace. Many of us feel we must pray more or serve better before God will accept us. But the birth of Jesus is grace in its greatest form. Grace welcomes us as we are, then transforms us, teaching us to extend that same grace to others.",
            "question": "Where in my life do I find it hardest to receive God's grace?",
            "prompts": [
                  "When have I experienced God's kindness in a way I did not deserve or expect?",
                  "How would my relationships change if I learned to receive and extend grace more freely?"
            ],
            "practice": [
                  "Reflect on an area of your life where you have been trying to earn God's approval or struggling to accept His forgiveness. Bring it honestly before Him.",
                  "Receive an act of kindness with gratitude, without feeling that you must immediately repay it."
            ],
            "prayer": "Lord, help me receive Your grace with a humble and open heart. Free me from the need to earn Your love. Teach me to rest in Your kindness and allow Your grace to transform my life. Amen."
      },
      {
            "title": "Mercy",
            "greek": "Ἔλεος · Eleos",
            "part": "Receiving What Christ Brings",
            "ref": "Luke 1:50",
            "text": "Eleos means mercy: God’s compassion and willingness to forgive, restore and help. Mary sang that God’s mercy extends from generation to generation. You may wonder how often God can forgive the same failure. Advent declares that He has not abandoned us to our mistakes. Having received mercy, we are called to show it through patience, kindness and forgiveness where reconciliation is possible and safe.",
            "question": "Where in my life do I most need God's mercy?",
            "prompts": [
                  "How has God's mercy helped me begin again?",
                  "Who in my life needs to experience mercy through me?"
            ],
            "practice": [
                  "Reflect on a mistake or failure that continues to trouble you. Bring it honestly before God.",
                  "Show mercy to one person today through patience, forgiveness, or an act of kindness."
            ],
            "prayer": "Lord, thank You for Your unfailing mercy. Forgive my failures and help me turn towards You with a humble heart. Teach me to receive Your compassion and extend that same mercy to others. Amen."
      },
      {
            "title": "Joy",
            "greek": "Χαρά · Chara",
            "part": "Receiving What Christ Brings",
            "ref": "Luke 2:10",
            "text": "Chara means joy, the gladness that comes from experiencing God’s goodness and salvation. The angel announced good news of great joy for all the people. Yet Christmas can arrive while we carry worries behind our smiles. Christian joy is rooted not in perfect circumstances but in what God has done in Jesus. And joy grows when shared, especially with those who find Christmas difficult.",
            "question": "Where in my life do I find it difficult to experience joy?",
            "prompts": [
                  "What does the birth of Jesus teach me about the source of Christian joy?",
                  "How can I share the joy of Christ with someone this Advent?"
            ],
            "practice": [
                  "Remember one reason you can rejoice in Christ, even if your circumstances are difficult.",
                  "Bring encouragement or kindness to someone who needs it today."
            ],
            "prayer": "Lord Jesus, thank You for the joy of Your coming. Help me recognise Your goodness when life feels difficult. Renew my heart with gratitude, and teach me to share Your joy with others. Amen."
      },
      {
            "title": "Peace",
            "greek": "Εἰρήνη · Eirēnē",
            "part": "Living the Good News",
            "ref": "John 14:27",
            "text": "Eirēnē means peace: reconciliation with God and the wholeness His presence brings. Jesus was born into a world of oppression, poverty and fear, yet angels announced peace on earth. Peace is not the absence of trouble; it is Christ’s gift in the middle of it. We can return to Him whenever our hearts are troubled, and as we receive His peace, we learn to make peace.",
            "question": "Where in my life do I find it most difficult to receive God's peace?",
            "prompts": [
                  "When have I experienced God's peace during a difficult or uncertain season?",
                  "How would my life change if I learned to receive and share Christ's peace more freely?"
            ],
            "practice": [
                  "Identify one concern that has been disturbing your peace. Instead of trying to manage it entirely on your own, bring it honestly before God.",
                  "Take a few quiet moments to sit in God's presence. Whenever your mind returns to a worry, gently bring that concern to Him in prayer."
            ],
            "prayer": "Lord Jesus, thank You for the gift of Your peace. Help me receive what You freely offer. Quiet my anxious thoughts, strengthen my trust in You, and teach me to rest in Your care. Let Your peace guard my heart and shape the way I live. Amen."
      },
      {
            "title": "Love",
            "greek": "Ἀγάπη · Agapē",
            "part": "Living the Good News",
            "ref": "1 John 4:9–11",
            "text": "Agapē describes God’s self-giving love for humanity and the love we are called to show one another. God revealed His love by sending His Son so that we might live through Him. Disappointments can make us doubt that anyone, even God, truly loves us. Advent invites us to receive that love and let it reshape our relationships, beginning with someone who feels forgotten.",
            "question": "Where do I find it difficult to believe that God loves me?",
            "prompts": [
                  "What does the coming of Jesus teach me about genuine love?",
                  "Who needs to experience Christ's love through me this Christmas?"
            ],
            "practice": [
                  "Remember one way God has demonstrated His love towards you.",
                  "Express genuine love to someone through a thoughtful action today."
            ],
            "prayer": "Lord Jesus, thank You for revealing God's love through Your coming. Help me receive Your love with gratitude and share it with others. Teach me to love with patience, compassion, and sincerity. Amen."
      },
      {
            "title": "Gift",
            "greek": "Δῶρον · Dōron",
            "part": "Living the Good News",
            "ref": "Matthew 2:11",
            "text": "Dōron means gift or offering. The Magi opened their treasures and offered Jesus gold, frankincense and myrrh as acts of worship. What we offer Christ need not be expensive. It may be forgiveness, care for someone in need, or our abilities used without seeking recognition. Small offerings become meaningful expressions of gratitude for His grace. What might you need to open before Him?",
            "question": "What do the gifts of the Magi teach me about honouring Christ?",
            "prompts": [
                  "What part of my life have I been reluctant to offer to God?",
                  "How can I express Christ's love through generosity this Christmas?"
            ],
            "practice": [
                  "Reflect on something meaningful you can offer to Christ.",
                  "Give someone a meaningful gift of your time, attention, encouragement, or practical help."
            ],
            "prayer": "Lord Jesus, thank You for the wonderful gift of Your coming. Help me offer my life in gratitude for Your grace. Teach me to give generously, serve faithfully, and honour You through my words and actions. Amen."
      },
      {
            "title": "Good News",
            "greek": "Εὐαγγελίζομαι · Euangelizomai",
            "part": "Living the Good News",
            "ref": "Luke 2:10",
            "text": "Euangelizomai means to bring good news; it is the root of our word evangelise. The shepherds heard it and could not keep it to themselves. In Jesus, God has acted to bring salvation. Jesus’ own ministry brought good news to the poor and neglected, and His words and actions belonged together. We share good news best with kindness, humility and respect, letting our lives reflect His love.",
            "question": "What does the good news of Jesus mean to me personally?",
            "prompts": [
                  "What prevents me from sharing my faith with others?",
                  "How can I become a better messenger of God's good news?"
            ],
            "practice": [
                  "Think about someone who needs encouragement, hope, or the good news of Jesus Christ.",
                  "Share one encouraging truth about Christ with someone today."
            ],
            "prayer": "Lord Jesus, thank You for the good news of Your coming. Give me courage to share Your love, wisdom to speak with kindness, and patience to listen to others. Help my words and actions reflect the good news I have received. Amen."
      },
      {
            "title": "Return",
            "greek": "Παρουσία · Parousia",
            "part": "Living the Good News",
            "ref": "James 5:7–8",
            "text": "Parousia means coming or arrival, and often describes Christ’s promised return. James urges believers to be patient and strengthen their hearts, like a farmer waiting for the harvest. Christmas celebrates His birth, but our story of waiting is not yet finished. We began with Gennēsis, birth; we end with Parousia, return. The Saviour has come, and the King will come again.",
            "question": "How does the promise of Christ's return influence my understanding of the future?",
            "prompts": [
                  "What does James's illustration of the patient farmer teach me about waiting?",
                  "What would I change if I lived each day expecting Christ's return"
            ],
            "practice": [
                  "Reflect on how the promise of Christ's return influences your priorities and decisions.",
                  "Identify one responsibility or relationship that needs your attention, and take a faithful step today."
            ],
            "prayer": "Lord Jesus, thank You for coming into our world to bring salvation. Strengthen my faith as I await Your promised return. Help me live with patience, serve with love, and remain faithful in my responsibilities. Come, Lord Jesus. Amen."
      }
    ]
  },
  {
    id: "god-of-all-grace",
    title: "The God of All Grace",
    subtitle: "Fifteen dimensions of grace",
    author: "Samuel Thambusamy",
    category: "Faith & Belief",
    status: "available",
    sample: true,
    buyUrl: SITE_URL,
    palette: { bg: "#4A120B", fg: "#FBE9C9", sun: "#DA7028", sun2: "#F5A536" },
    blurb: "A short journey through fifteen dimensions of God’s grace: how it finds us, saves us, shapes us and sends us out.",
    ideas: [
      { title: "Prevenient grace", ref: "1 John 4:19",
        text: "Before you ever looked for God, God was already looking for you. Grace does not wait at the finish line for those who make it; it runs ahead, stirring hunger, opening eyes and unsettling comfortable hearts. Every honest question you have asked about faith was itself a sign of grace at work. Your story with God did not begin with your decision. It began with his pursuit.",
        question: "Looking back, where can you see God at work in your life before you were paying attention?" },
      { title: "Saving grace", ref: "Ephesians 2:8–9",
        text: "Salvation is not a reward for good behaviour; it is a rescue. Grace means God does for us what we could never do for ourselves. We do not climb up to heaven by effort, achievement or religious performance. God comes down to us. Faith is simply the empty hand that receives the gift. That leaves no room for pride and no reason for despair.",
        question: "Where are you still trying to earn what God has already given?" },
      { title: "Justifying grace", ref: "Romans 3:23–24",
        text: "Justification is a courtroom word. The verdict over your life has already been read: not guilty, declared righteous, because of Christ. This is not God pretending your sin doesn’t matter. It is God dealing with it fully at the cross. You don’t have to keep defending yourself before others or before your own conscience. In Christ, the case is closed.",
        question: "Whose verdict about you do you replay most often, and how does God’s verdict answer it?" },
      { title: "Forgiving grace", ref: "1 John 1:9",
        text: "God does not keep a file of your failures to bring out later. When we confess, he forgives completely and cleanses thoroughly. This doesn’t make sin small; it makes mercy large. Forgiven people slowly become forgiving people, because they know both what forgiveness costs and what it frees. Grace that has been received always wants to be passed on to someone else.",
        question: "Is there someone you need to forgive the way you have been forgiven?" },
      { title: "Adopting grace", ref: "Galatians 4:4–7",
        text: "God did not save you to make you a servant on probation. He adopted you as a son or daughter, with full access to the Father’s presence. In many of our families, belonging can feel tied to performance, marks or marriage prospects. In God’s family, belonging comes first. You call him “Abba” not because you have earned it, but because his Spirit lives in you.",
        question: "How would your week look different if you lived as a beloved child rather than an anxious employee?" },
      { title: "Sanctifying grace", ref: "Philippians 1:6",
        text: "Grace doesn’t only pardon; it transforms. Sanctifying grace is God’s patient work of making us holy, little by little, habit by habit. It is less like a lightning strike and more like a seed growing in the dark. You will not always feel the change happening. But the God who began this good work has promised to finish it. Your growth is his project before it is yours.",
        question: "Which small, daily habit could make space for God’s shaping work this month?" },
      { title: "Sufficient grace", ref: "2 Corinthians 12:9–10",
        text: "Some prayers are answered with removal. Others are answered with strength. Paul begged for his thorn to be taken away, and God answered that his grace was enough. Sufficient grace doesn’t promise an easy road; it promises a present God. Weakness is not the end of your usefulness. Often it is the very place where Christ’s power is seen most clearly.",
        question: "What weakness have you been hiding that God might want to work through?" },
      { title: "Common grace", ref: "Matthew 5:45; James 1:17",
        text: "God’s kindness is not limited to the church. Rain falls on every field, beauty is seen by every eye, and good work is done by believers and unbelievers alike. Common grace teaches us humility and gratitude. It frees us to honour truth and goodness wherever we find them, in science, art, culture and our neighbours, because every good gift comes from above.",
        question: "Where have you seen God’s goodness this week outside church walls?" },
      { title: "Teaching grace", ref: "Titus 2:11–12",
        text: "Grace is not a licence to live carelessly. It is a teacher. The same grace that saves us also trains us to say no to what destroys and yes to what is good. Grace sets a higher standard than law ever could, because it works from the inside out. We obey not in order to be accepted, but because in Christ we already are.",
        question: "What is grace currently teaching you to say no to, and what to say yes to?" },
      { title: "Empowering grace", ref: "1 Corinthians 15:10",
        text: "Paul worked harder than anyone, yet insisted it was God’s grace at work in him. Grace is not opposed to effort; it is opposed to earning. God’s grace can fuel our studies, our jobs, our ministries and our families. We still work hard, but we work from rest, not for acceptance. The result is diligence without burnout and achievement without arrogance.",
        question: "Are you working for God’s approval or from it? What shows the difference?" },
      { title: "Gifting grace", ref: "1 Peter 4:10",
        text: "In the New Testament, the words for grace (charis) and gift (charisma) belong together. Every believer has received grace in a particular shape: a gift to serve others. No one is ungifted, and no one is gifted for themselves alone. Your abilities, experiences and even your wounds are entrusted to you for the good of the body. Stewarding grace means using it, not displaying it.",
        question: "What gift has God given you, and who could benefit from it this week?" },
      { title: "Generous grace", ref: "2 Corinthians 8:9",
        text: "The gospel is a story of generosity: though Christ was rich, he became poor for our sake. Grace received becomes grace released. Generosity is not only about money; it includes time, hospitality, attention and encouragement. In a culture that measures worth by accumulation, generous Christians become living signs that our security rests in God, not in what we own.",
        question: "What is one specific, generous act you could do this week without being asked?" },
      { title: "Gracious speech", ref: "Colossians 4:6; Ephesians 4:29",
        text: "Grace shapes not only what we believe but how we speak. Online and offline, our words can wound or heal. Gracious speech is honest without being harsh, truthful without being proud, and seasoned so that others want to keep listening. Before you post, reply or argue, ask a simple question: will these words carry grace to the person who receives them?",
        question: "Which conversation, online or in person, needs more grace from you?" },
      { title: "Abounding grace", ref: "Romans 5:20",
        text: "Where sin increased, grace increased all the more. There is no pit deeper than God’s mercy and no history too broken for his healing. Abounding grace speaks directly to the person who thinks they have gone too far. It does not shrink back before our worst moments. The cross is the proof that God’s grace is always greater than our guilt.",
        question: "What part of your past do you believe is beyond grace? What would it mean to bring it to God?" },
      { title: "Future grace", ref: "1 Peter 1:13",
        text: "Grace is not only behind us; it is ahead of us. Peter urges us to set our hope fully on the grace that will be brought to us when Jesus is revealed. The best is yet to come. Future grace gives courage for today, because the God who has been faithful will keep being faithful. Our story ends not in fear, but in glory.",
        question: "How does hope in future grace change the way you face what worries you most?" }
    ]
  },
  { id: "revolutionary-ideas", title: "Eight Revolutionary New Testament Ideas", subtitle: "Coming soon", category: "Faith & Scripture",
    status: "soon", palette: { bg: "#DA7028", fg: "#FFF6E6", sun: "#4A120B", sun2: "#F5A536" },
    blurb: "Eight New Testament truths that turned the ancient world upside down.", ideas: [] },
  { id: "forgotten-story", title: "The Forgotten Story", subtitle: "Coming soon", category: "Faith & Culture",
    status: "soon", palette: { bg: "#F5A536", fg: "#4A120B", sun: "#DA7028", sun2: "#FBE9C9" },
    blurb: "A narrative history of Indian Christianity.", ideas: [] },
  { id: "ready-for-influence", title: "Ready for Influence", subtitle: "Coming soon", category: "Faith & Life",
    status: "soon", palette: { bg: "#2E0B07", fg: "#F5A536", sun: "#F5A536", sun2: "#DA7028" },
    blurb: "Faithful influence in professional life.", ideas: [] }
];
BOOKS.forEach(b => b.ideas.forEach((idea, i) => { idea.id = b.id + ":" + (i + 1); idea.n = i + 1; idea.bookId = b.id; }));
export const ALL_IDEAS = BOOKS.flatMap(b => b.ideas);
export const ideaById = id => ALL_IDEAS.find(i => i.id === id);
export const bookById = id => BOOKS.find(b => b.id === id);
export const AVAILABLE = BOOKS.filter(b => b.status === "available");

