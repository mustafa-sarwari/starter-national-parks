/**
 * National Parks Explorer
 * A web application to explore US National Parks
 * 
 * @author Mustafa Sarwari
 * @description This application fetches and displays information about US National Parks
 */

// Mock data for National Parks (using static data since NPS API requires API key)
const nationalParksData = [
    {
        id: "1",
        name: "Yellowstone National Park",
        state: "Wyoming, Montana, Idaho",
        description: "Yellowstone was the world's first national park, established in 1872. It's known for its wildlife and geothermal features, especially Old Faithful geyser.",
        fullDescription: "Yellowstone National Park spans an area of 3,472 square miles, comprising lakes, canyons, rivers, and mountain ranges. The park is known for its wildlife and many geothermal features, especially Old Faithful geyser, one of its most popular features. It has numerous types of ecosystems, but the subalpine forest is the most abundant.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        activities: ["Hiking", "Wildlife Viewing", "Camping", "Photography"],
        established: "1872"
    },
    {
        id: "2",
        name: "Grand Canyon National Park",
        state: "Arizona",
        description: "The Grand Canyon is a steep-sided canyon carved by the Colorado River. It is 277 miles long, up to 18 miles wide and attains a depth of over a mile.",
        fullDescription: "Grand Canyon National Park showcases one of the world's most spectacular natural wonders - the Grand Canyon. The canyon's immense size and beautiful landscape offer visitors spectacular vistas, desert trails, and opportunities for river rafting and hiking.",
        image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&h=600&fit=crop",
        activities: ["Hiking", "Rafting", "Sightseeing", "Camping"],
        established: "1919"
    },
    {
        id: "3",
        name: "Yosemite National Park",
        state: "California",
        description: "Yosemite is famous for its giant sequoia trees, the iconic Half Dome, and beautiful waterfalls. It's a UNESCO World Heritage Site.",
        fullDescription: "First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        activities: ["Rock Climbing", "Hiking", "Photography", "Camping"],
        established: "1890"
    },
    {
        id: "4",
        name: "Zion National Park",
        state: "Utah",
        description: "Zion is known for its stunning red cliffs and narrow canyons. The park's unique geography and variety of life zones allow for unusual plant and animal diversity.",
        fullDescription: "Zion National Park follows the Virgin River through a spectacular canyon with towering walls. The park features massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Throughout the park, you'll find high plateaus, a maze of narrow, deep, sandstone canyons, and the Virgin River and its tributaries.",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
        activities: ["Canyoneering", "Hiking", "Rock Climbing", "Backpacking"],
        established: "1919"
    },
    {
        id: "5",
        name: "Rocky Mountain National Park",
        state: "Colorado",
        description: "Rocky Mountain National Park showcases majestic mountain views, a variety of wildlife, varied climates and environments—from wooded forests to mountain tundra.",
        fullDescription: "With elevations from 7,860 feet to 14,259 feet, Rocky Mountain National Park makes for spectacular hiking, wildlife viewing, and mountaineering. The park is home to diverse wildlife including elk, bighorn sheep, moose, and black bears.",
        image: "https://images.unsplash.com/photo-1575408264798-b50b252663e6?w=800&h=600&fit=crop",
        activities: ["Hiking", "Wildlife Viewing", "Camping", "Mountaineering"],
        established: "1915"
    },
    {
        id: "6",
        name: "Acadia National Park",
        state: "Maine",
        description: "Acadia protects the natural beauty of the highest rocky headlands along the Atlantic coastline, an abundance of habitats, and a rich cultural heritage.",
        fullDescription: "Acadia National Park protects more than 47,000 acres on Mount Desert Island and surrounding islands off the coast of Maine. The park features mountains, forests, lakes, and ocean shoreline. It's known for Cadillac Mountain, the highest point on the U.S. East Coast.",
        image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&h=600&fit=crop",
        activities: ["Hiking", "Biking", "Kayaking", "Wildlife Viewing"],
        established: "1919"
    },
    {
        id: "7",
        name: "Great Smoky Mountains National Park",
        state: "Tennessee, North Carolina",
        description: "The Great Smoky Mountains are known for their diversity of plant and animal life, ancient mountains, and the blue mist that often hovers over the peaks.",
        fullDescription: "Great Smoky Mountains National Park straddles the border of North Carolina and Tennessee. The park preserves one of the last large remnants of the diverse Appalachian forest. It's America's most visited national park, known for its diversity of plant and animal life, beauty of its ancient mountains, and remnants of Southern Appalachian mountain culture.",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
        activities: ["Hiking", "Wildlife Viewing", "Historic Sites", "Camping"],
        established: "1934"
    },
    {
        id: "8",
        name: "Glacier National Park",
        state: "Montana",
        description: "Glacier National Park preserves more than a million acres of forests, alpine meadows, and lakes with a unique ecosystem shaped by glaciers.",
        fullDescription: "Glacier National Park's Going-to-the-Sun Road is one of the most scenic drives in North America. The park encompasses two mountain ranges, over 130 named lakes, more than 1,000 different species of plants, and hundreds of species of animals.",
        image: "https://images.unsplash.com/photo-1525373698358-041e3a460346?w=800&h=600&fit=crop",
        activities: ["Hiking", "Scenic Drives", "Wildlife Viewing", "Backpacking"],
        established: "1910"
    }
];

// Application State
const state = {
    parks: nationalParksData,
    filteredParks: nationalParksData,
    currentSearch: '',
    currentStateFilter: ''
};

/**
 * Initialize the application when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

/**
 * Initialize all app components and event listeners
 */
function initializeApp() {
    populateStateFilter();
    renderParks(state.filteredParks);
    setupEventListeners();
}

/**
 * Populate the state filter dropdown with unique states
 */
function populateStateFilter() {
    const stateFilter = document.getElementById('state-filter');
    const states = new Set();
    
    // Extract unique states from parks data
    state.parks.forEach(park => {
        const parkStates = park.state.split(',').map(s => s.trim());
        parkStates.forEach(s => states.add(s));
    });
    
    // Sort states alphabetically
    const sortedStates = Array.from(states).sort();
    
    // Add options to dropdown
    sortedStates.forEach(stateName => {
        const option = document.createElement('option');
        option.value = stateName;
        option.textContent = stateName;
        stateFilter.appendChild(option);
    });
}

/**
 * Set up all event listeners for the application
 */
function setupEventListeners() {
    // Search functionality
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // State filter
    const stateFilter = document.getElementById('state-filter');
    stateFilter.addEventListener('change', handleStateFilter);
    
    // Close details modal
    const closeBtn = document.getElementById('close-details');
    closeBtn.addEventListener('click', closeDetailsModal);
    
    // Close modal when clicking outside
    const detailsModal = document.getElementById('park-details');
    detailsModal.addEventListener('click', (e) => {
        if (e.target === detailsModal) {
            closeDetailsModal();
        }
    });
}

/**
 * Handle search input and filter parks
 */
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    state.currentSearch = searchInput.value.toLowerCase().trim();
    filterAndRenderParks();
}

/**
 * Handle state filter change
 */
function handleStateFilter() {
    const stateFilter = document.getElementById('state-filter');
    state.currentStateFilter = stateFilter.value;
    filterAndRenderParks();
}

/**
 * Filter parks based on current search and state filter
 */
function filterAndRenderParks() {
    state.filteredParks = state.parks.filter(park => {
        const matchesSearch = state.currentSearch === '' || 
            park.name.toLowerCase().includes(state.currentSearch) ||
            park.description.toLowerCase().includes(state.currentSearch);
        
        const matchesState = state.currentStateFilter === '' ||
            park.state.includes(state.currentStateFilter);
        
        return matchesSearch && matchesState;
    });
    
    renderParks(state.filteredParks);
}

/**
 * Render park cards to the DOM
 * @param {Array} parks - Array of park objects to render
 */
function renderParks(parks) {
    const parksGrid = document.getElementById('parks-grid');
    const errorDiv = document.getElementById('error');
    
    // Clear existing content
    parksGrid.innerHTML = '';
    errorDiv.classList.add('hidden');
    
    // Show message if no parks found
    if (parks.length === 0) {
        parksGrid.innerHTML = '<p class="no-results">No parks found. Try adjusting your search criteria.</p>';
        return;
    }
    
    // Create and append park cards
    parks.forEach(park => {
        const card = createParkCard(park);
        parksGrid.appendChild(card);
    });
}

/**
 * Create a park card element
 * @param {Object} park - Park object with details
 * @returns {HTMLElement} Park card element
 */
function createParkCard(park) {
    const card = document.createElement('div');
    card.className = 'park-card';
    card.setAttribute('data-park-id', park.id);
    
    card.innerHTML = `
        <img src="${park.image}" alt="${park.name}" onerror="this.src='https://via.placeholder.com/800x600?text=National+Park'">
        <div class="park-card-content">
            <h3>${park.name}</h3>
            <p class="location">📍 ${park.state}</p>
            <p class="description">${park.description}</p>
        </div>
    `;
    
    // Add click event to show details
    card.addEventListener('click', () => showParkDetails(park));
    
    return card;
}

/**
 * Show detailed information about a park in a modal
 * @param {Object} park - Park object with details
 */
function showParkDetails(park) {
    const detailsModal = document.getElementById('park-details');
    const detailsContent = document.getElementById('details-content');
    
    detailsContent.innerHTML = `
        <img src="${park.image}" alt="${park.name}" style="width: 100%; border-radius: 8px; margin-bottom: 1.5rem;" onerror="this.src='https://via.placeholder.com/800x600?text=National+Park'">
        <h2 style="color: var(--primary-color); margin-bottom: 0.5rem;">${park.name}</h2>
        <p style="color: var(--text-secondary); margin-bottom: 1rem;">
            <strong>📍 Location:</strong> ${park.state}<br>
            <strong>📅 Established:</strong> ${park.established}
        </p>
        <div style="margin-bottom: 1.5rem;">
            <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">About</h3>
            <p style="line-height: 1.8;">${park.fullDescription}</p>
        </div>
        <div>
            <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">Popular Activities</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${park.activities.map(activity => 
                    `<span style="background: var(--accent-color); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem;">${activity}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    detailsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Close the park details modal
 */
function closeDetailsModal() {
    const detailsModal = document.getElementById('park-details');
    detailsModal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createParkCard,
        filterAndRenderParks,
        showParkDetails,
        closeDetailsModal
    };
}
