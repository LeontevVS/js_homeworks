const tabNavigationItems = document.querySelectorAll('.tab')
const tabContentItems = document.querySelectorAll('.tab__content')

function selectButton(button) {
    tabNavigationItems.forEach(element => {
        element.className = 'tab'
    });
    button.className = 'tab tab_active'
}

function selectTabContent(tabContent) {
    tabContentItems.forEach(element => {
        element.className = 'tab__content'
    });
    tabContent.className = 'tab__content tab__content_active'
}

for (let i = 0; i < tabNavigationItems.length; i++) {
    const tabButton = tabNavigationItems[i];
    const tabContent = tabContentItems[i];
    tabButton.addEventListener('click', () => {
        selectButton(tabButton);
        selectTabContent(tabContent);
    })
}