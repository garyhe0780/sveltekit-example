<script lang="ts">
  import { onMount } from 'svelte'
  let text = 'world'

  onMount(() => {
    fetch('/api/hello')
      .then((r) => r.text())
      .then((v) => {
        text += v
      })
  })
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit
  <a href="https://kit.svelte.dev">kit.svelte.dev</a>
  to read the documentation
</p>
<p>{text}</p>
