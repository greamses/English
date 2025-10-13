let words = [
  {
    word: "Partying",
    hint: "Celebrating and having a good time",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif",
    sentenceUsage: "We were <span>partying</span> all night to celebrate the New Year with friends and family.",
    pronunciation: "/ˈpɑːr.ti.ɪŋ/"
  },
  {
    word: "Astonished",
    hint: "Feeling very surprised or amazed",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f62f/512.gif",
    sentenceUsage: "She was <span>astonished</span> by the unexpected news that she had won the lottery.",
    pronunciation: "/əˈstɑːnɪʃt/"
  },
  {
    word: "Flushed",
    hint: "Having a red face due to embarrassment or excitement",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f633/512.gif",
    sentenceUsage: "Her cheeks were <span>flushed</span> with embarrassment after she accidentally spilled her drink on the host.",
    pronunciation: "/flʌʃt/"
  },
  {
    word: "Mind-blown",
    hint: "Being utterly astonished or amazed",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f92f/512.gif",
    sentenceUsage: "After watching the magic show, his mind was completely <span>blown</span> by the magician's incredible tricks.",
    pronunciation: "/ˈmaɪnd.bləʊn/"
  },
  {
    word: "Blush",
    hint: "Feeling shy",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60a/512.gif",
    sentenceUsage: "She couldn't help but <span>blush</span> when he complimented her on her new hairstyle.",
    pronunciation: "/blʌʃ/"
  },
  {
    word: "Smile",
    hint: "Feeling happy",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.gif",
    sentenceUsage: "His warm <span>smile</span> brightened up the room and put everyone at ease.",
    pronunciation: "/smaɪl/"
  },
  {
    word: "Laugh",
    hint: "Feeling funny",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f606/512.gif",
    sentenceUsage: "The comedian's jokes made everyone <span>laugh</span> out loud until their stomachs hurt.",
    pronunciation: "/læf/"
  },
  {
    word: "Surprise",
    hint: "Feeling amazed",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f632/512.gif",
    sentenceUsage: "Her expression of <span>surprise</span> was priceless when she walked into the room and saw all her friends there for her birthday.",
    pronunciation: "/səˈpraɪz/"
  },
  {
    word: "Kiss",
    hint: "Sending love",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f618/512.gif",
    sentenceUsage: "He leaned in to give her a quick <span>kiss</span> on the cheek as a sign of affection.",
    pronunciation: "/kɪs/"
  },
  {
    word: "Wink",
    hint: "Sending a secret message",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f609/512.gif",
    sentenceUsage: "She gave him a playful <span>wink</span> across the room to let him know she understood the inside joke.",
    pronunciation: "/wɪŋk/"
  },
  {
    word: "Cool",
    hint: "Feeling awesome",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif",
    sentenceUsage: "She thought the new gadget was really <span>cool</span> and couldn't wait to try it out.",
    pronunciation: "/kuːl/"
  },
  {
    word: "Hug",
    hint: "Giving a big squeeze",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f917/512.gif",
    sentenceUsage: "She ran up to him and gave him a tight <span>hug</span> to show how much she missed him.",
    pronunciation: "/hʌɡ/"
  },
  {
    word: "Joyful",
    hint: "Feeling extreme happiness",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f602/512.gif",
    sentenceUsage: "The children were <span>joyful</span> when they saw the presents under the Christmas tree and couldn't wait to unwrap them.",
    pronunciation: "/ˈdʒɔɪ.fəl/"
  },
  {
    word: "Ecstatic",
    hint: "Feeling overwhelming happiness",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f929/512.gif",
    sentenceUsage: "Winning the competition made her feel absolutely <span>ecstatic</span> and she jumped for joy.",
    pronunciation: "/ɪkˈstæt.ɪk/"
  },
  {
    word: "Grinning",
    hint: "Smiling broadly with happiness or amusement",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f601/512.gif",
    sentenceUsage: "She couldn't stop <span>grinning</span> after receiving the good news that she had passed her driving test.",
    pronunciation: "/ˈɡrɪnɪŋ/"
  },
  {
    word: "Cheerful",
    hint: "Feeling happy and positive",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f603/512.gif",
    sentenceUsage: "She was always <span>cheerful</span>, no matter what challenges she faced, and her optimism inspired those around her.",
    pronunciation: "/ˈtʃɪə.fəl/"
  },
  {
    word: "Euphoric",
    hint: "Feeling intense happiness and excitement",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60d/512.gif",
    sentenceUsage: "After the team won the championship, they were in a state of <span>euphoria</span> and celebrated late into the night.",
    pronunciation: "/juːˈfɔːr.ɪk/"
  },
  {
    word: "Delighted",
    hint: "Feeling very pleased",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60b/512.gif",
    sentenceUsage: "She was <span>delighted</span> with the surprise party her friends had organized for her, and it made her feel loved and appreciated.",
    pronunciation: "/dɪˈlaɪ.tɪd/"
  },
  {
    word: "Blissful",
    hint: "Feeling extreme happiness and contentment",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f60c/512.gif",
    sentenceUsage: "After a long day at the spa, she felt completely <span>blissful</span> and relaxed, like all her worries had melted away.",
    pronunciation: "/ˈblɪs.fəl/"
  },
  {
    word: "Jovial",
    hint: "Full of high spirits and happiness",
    image: "https://fonts.gstatic.com/s/e/notoemoji/latest/1f604/512.gif",
    sentenceUsage: "His <span>jovial</span> nature always lifted everyone's spirits, especially during tough times, with his infectious laughter and positive attitude.",
    pronunciation: "/ˈdʒəʊ.vi.əl/"
  }
];

export default words