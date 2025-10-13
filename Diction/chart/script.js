        // Phoneme data
        const phonemes = [
  // Monophthongs
          { symbol: '/iː/', sound: 'ee', category: 'monophthong', type: 'vowel' },
          { symbol: '/ɪ/', sound: 'i', category: 'monophthong', type: 'vowel' },
          { symbol: '/e/', sound: 'e', category: 'monophthong', type: 'vowel' },
          { symbol: '/ɜː/', sound: 'er', category: 'monophthong', type: 'vowel' },
          { symbol: '/æ/', sound: 'ae', category: 'monophthong', type: 'vowel' },
          { symbol: '/ɑː/', sound: 'ar', category: 'monophthong', type: 'vowel' },
          { symbol: '/ɒ/', sound: 'o', category: 'monophthong', type: 'vowel' },
          { symbol: '/ɔː/', sound: 'or', category: 'monophthong', type: 'vowel' },
          { symbol: '/ʊ/', sound: 'book', category: 'monophthong', type: 'vowel' },
          { symbol: '/uː/', sound: 'school', category: 'monophthong', type: 'vowel' },
          { symbol: '/ʌ/', sound: 'uh', category: 'monophthong', type: 'vowel' },
          { symbol: '/ə/', sound: 'schwa', category: 'monophthong', type: 'vowel' },

  // Diphthongs
          { symbol: '/eɪ/', sound: 'ai', category: 'diphthong', type: 'vowel' },
          { symbol: '/aɪ/', sound: 'ei', category: 'diphthong', type: 'vowel' },
          { symbol: '/ɔɪ/', sound: 'oi', category: 'diphthong', type: 'vowel' },
          { symbol: '/aʊ/', sound: 'ou', category: 'diphthong', type: 'vowel' },
          { symbol: '/əʊ/', sound: 'oa', category: 'diphthong', type: 'vowel' },
          { symbol: '/ɪə/', sound: 'ear', category: 'diphthong', type: 'vowel' },
          { symbol: '/eə/', sound: 'air', category: 'diphthong', type: 'vowel' },
          { symbol: '/ʊə/', sound: 'tour', category: 'diphthong', type: 'vowel' },

  // Voiceless Consonants
          { symbol: '/p/', sound: 'p', category: 'voiceless', type: 'consonant' },
          { symbol: '/t/', sound: 't', category: 'voiceless', type: 'consonant' },
          { symbol: '/k/', sound: 'k', category: 'voiceless', type: 'consonant' },
          { symbol: '/f/', sound: 'f', category: 'voiceless', type: 'consonant' },
          { symbol: '/θ/', sound: 'th', category: 'voiceless', type: 'consonant' },
          { symbol: '/s/', sound: 's', category: 'voiceless', type: 'consonant' },
          { symbol: '/ʃ/', sound: 'sh', category: 'voiceless', type: 'consonant' },
          { symbol: '/h/', sound: 'h', category: 'voiceless', type: 'consonant' },
          { symbol: '/tʃ/', sound: 'ch', category: 'voiceless', type: 'consonant' },

  // Voiced Consonants
          { symbol: '/b/', sound: 'b', category: 'voiced', type: 'consonant' },
          { symbol: '/d/', sound: 'd', category: 'voiced', type: 'consonant' },
          { symbol: '/g/', sound: 'g', category: 'voiced', type: 'consonant' },
          { symbol: '/v/', sound: 'v', category: 'voiced', type: 'consonant' },
          { symbol: '/ð/', sound: 'th', category: 'voiced', type: 'consonant' },
          { symbol: '/z/', sound: 'z', category: 'voiced', type: 'consonant' },
          { symbol: '/ʒ/', sound: 'zh', category: 'voiced', type: 'consonant' },
          { symbol: '/dʒ/', sound: 'j', category: 'voiced', type: 'consonant' },

  // Nasals
          { symbol: '/m/', sound: 'm', category: 'voiced', type: 'consonant' },
          { symbol: '/n/', sound: 'n', category: 'voiced', type: 'consonant' },
          { symbol: '/ŋ/', sound: 'ng', category: 'voiced', type: 'consonant' },

  // Approximants
          { symbol: '/l/', sound: 'l', category: 'voiced', type: 'consonant' },
          { symbol: '/r/', sound: 'r', category: 'voiced', type: 'consonant' },
          { symbol: '/j/', sound: 'y', category: 'voiced', type: 'consonant' },
          { symbol: '/w/', sound: 'w', category: 'voiced', type: 'consonant' }
];

        const phonemeContainer = document.getElementById('phonemeContainer');
const filterContainer = document.getElementById('filterContainer');

// Create phoneme elements
function createPhonemeElements() {
  phonemeContainer.innerHTML = ''; // Clear container
  phonemes.forEach(phoneme => {
    const phonemeElement = document.createElement('div');
    phonemeElement.classList.add('phoneme');
    phonemeElement.dataset.category = phoneme.category;
    phonemeElement.dataset.type = phoneme.type;
    phonemeElement.innerHTML = `
      <strong>${phoneme.symbol}</strong>
    `;

    phonemeElement.onclick = () => playSound(phoneme.sound);
    phonemeContainer.appendChild(phonemeElement);
  });
}

// Updated filter function to handle both category and type filters
function filterPhonemes(category = 'all', type = 'all') {
  const phonemeElements = document.querySelectorAll('.phoneme');

  phonemeElements.forEach(element => {
    const matchesCategory = (category === 'all' || element.dataset.category === category);
    const matchesType = (type === 'all' || element.dataset.type === type);

    if (matchesCategory && matchesType) {
      element.classList.remove('hidden');
    } else {
      element.classList.add('hidden');
    }
  });
}

// Single event listener for filter buttons
filterContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-btn')) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Determine category and type filters
    const category = e.target.dataset.category || 'all';
    const type = e.target.dataset.type || 'all';

    // Apply filter
    filterPhonemes(category, type);
  }
});

// Function to play sound
function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play().catch(error => {
    console.log('Error playing sound:', error);
    alert('Sound file not found. Make sure you have the sound files in the correct directory.');
  });
}

// Initialize the page
createPhonemeElements();