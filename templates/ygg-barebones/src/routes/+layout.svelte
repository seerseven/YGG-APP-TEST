<script lang="ts">
	import '../app.scss';
	import Aos from '$lib/utils/Aos.svelte';
	let { children } = $props();
</script>

<Aos />
<!-- Initialize AOS here -->
{@render children()}
