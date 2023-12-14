
function fLoremGenerator(){
    const loremIpsum = 'Lorem ipsum dolor sit amet. Aut magnam placeat aut iure doloribus ea optio atque est quod alias ex sapiente praesentium et suscipit porro vel incidunt reprehenderit. A vero sunt eum tempore blanditiis qui nihil enim et molestiae nisi. </p><p>Et laudantium unde qui odit saepe ea incidunt minima ut temporibus magni ea eligendi natus. Ut provident consectetur eos temporibus perspiciatis ea itaque necessitatibus aut earum possimus ut alias dolores et cupiditate autem. Est vitae tempora id adipisci nihil aut sint eaque a quaerat galisum. Quo molestias ipsa qui mollitia vero ea quia ipsam ea beatae cupiditate eum officiis exercitationem ut dignissimos officia sit voluptatum molestias. </p><p>Et itaque repudiandae est aperiam dolorum a nihil labore sit rerum tenetur sed impedit molestiae. Vel voluptatem numquam sed voluptatum asperiores aut consequatur numquam in obcaecati animi et dignissimos explicabo et doloribus doloribus aut possimus deleniti.';
    const paragraf = document.getElementById('paragrafo');
    for (let i = 0; i < 5; i++) {
        paragraf.innerHTML += loremIpsum;
    }
}