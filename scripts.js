async function fetchSearchData() {
      try {
        const response = await fetch('https://127.0.0.1:5081/GetSearchData'); 
        const jsonData = await response.json();

        return jsonData;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
    }

    function showSearchSuggestions() {
      const searchInput = document.getElementById('searchInput');
      const suggestionsList = document.getElementById('suggestionsList');

      searchInput.addEventListener('input', async () => {
        const searchQuery = searchInput.value.trim().toLowerCase();

        if (searchQuery === '') {
          suggestionsList.style.display = 'none';
        } else {
          try {
            const jsonData = await fetchSearchData();

            const filteredSuggestions = jsonData.filter(item =>
              item.body.toLowerCase().includes(searchQuery)
            );

            suggestionsList.innerHTML = '';

            if (filteredSuggestions.length > 0) {
              // Show the suggestions
              filteredSuggestions.forEach(item => {
                const bodyItems = item.body.split('\n');
                bodyItems.forEach(bodyItem => {
                  const suggestionItem = document.createElement('div');
                  suggestionItem.classList.add('suggestions-item');
                  suggestionItem.textContent = bodyItem; 
                  suggestionsList.appendChild(suggestionItem);
                });
              });

              suggestionsList.style.display = 'block';
            } else {
              suggestionsList.style.display = 'none';
            }
          } catch (error) {
            console.error('Error fetching and processing data:', error);
          }
        }
      });
    }

    document.addEventListener('DOMContentLoaded', showSearchSuggestions);
