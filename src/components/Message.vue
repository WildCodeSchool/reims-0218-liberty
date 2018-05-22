<template>
    <div>
      <p>{ props.name } - @{ props.shortName } - { props.date }</p>
      <img src="{ props.avatar }" alt=""/>
      <p>{ props.message }</p>
      <img src="{ props.cover }"/>
    </div>
</template>

<script>
export default {
    props: {
        name: "Madame Soleil",
        shortName: "MadameSoleil",
        date: "2018-01-28",
        avatar: "http://cache.magicmaman.com/data/photo/w800_c18/137/elsa-home.jpg",
        message: "Il fait un froid de coin-coin !",
        cover: "http://cache.magicmaman.com/data/photo/w800_c18/137/elsa-home.jpg",
    }
}
</script>
