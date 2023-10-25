// Elements
const toggleBtn = document.getElementById('theme-toggle');
const toggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const toggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  // Show light icon
  toggleLightIcon.classList.remove('hidden')
} else {
  toggleDarkIcon.classList.remove('hidden')
}

// Listening for dark or light mode
toggleBtn.addEventListener('click', () => {
  console.log('clicked')
  const mode = localStorage.getItem('color-theme');
  if (mode) {
    console.log(mode)
    if (mode === 'dark') {
      toggleLightIcon.classList.toggle('hidden');
      toggleDarkIcon.classList.toggle('hidden');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
    else {
      toggleLightIcon.classList.toggle('hidden');
      toggleDarkIcon.classList.toggle('hidden');
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }
  else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      toggleDarkIcon.classList.add('hidden');
      toggleLightIcon.classList.remove('hidden');
      localStorage.setItem('color-theme', 'light');
    }
    else {
      toggleDarkIcon.classList.add('hidden');
      toggleLightIcon.classList.remove('hidden');
      localStorage.setItem('color-theme', 'light');
    }
  }
})


