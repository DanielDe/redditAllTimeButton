
function add_all_time_button() {
    // Determine the subreddit.
    var subreddit = window.location.pathname.split('/')[2];
    var subreddit_path = '';
    if (subreddit) {
        var subreddit_path = '/r/' + subreddit;
    }
    var all_time_path = subreddit_path + '/top/?sort=top&t=all';

    // Create the all time button.
    var all_time_button = document.createElement('a');
    all_time_button.classList.add('choice');
    all_time_button.innerHTML = 'all time';
    all_time_button.href = 'http://www.reddit.com' + all_time_path;

    // Add the button to the tab menu.
    var tab_menu = document.querySelector('ul.tabmenu');
    var new_li = document.createElement('li');
    new_li.appendChild(all_time_button);
    tab_menu.appendChild(new_li);
}

add_all_time_button();
