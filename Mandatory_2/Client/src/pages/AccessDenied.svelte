<script>
    import { Link } from 'svelte-navigator';
</script>

<h1> 👿 Ingen adgang! 👿 </h1>

<p> Følg linket tilbage til Kea kioskens startside</p>

<div class="link-wrapper">
<Link to="/" > Home </Link>
</div>




<style>
    .link-wrapper > :global(a) {
		text-decoration: none;
        width: 5%;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
	}

	:global(a){
		display: block;
		font-family: Comic Sans MS;
		padding: 18px 55px;
		text-decoration: none;
		font-weight: 1000;
	}

	:global(a:hover:not(.active)){
		background-color: rgb(42, 122, 243);
		transition: 0.2s;
	}

    h1{
        font-size: 45px;
        color: red;
        font-weight: 700;
    }
</style>