<script lang="ts">
	import '../app.scss';
	import Aos from '$lib/utils/Aos.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<Aos />
<div class="relative px-8">
	<Navbar />
	<!-- Initialize AOS here -->
	{@render children()}
</div>
