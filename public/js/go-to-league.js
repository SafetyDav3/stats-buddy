const goToLeague = async (event) => {
    event.preventDefault();

    let league_id = event.target.value
    let target = '/league/' + league_id
    document.location.replace(target)


}

document.getElementById('league').addEventListener('change', goToLeague);