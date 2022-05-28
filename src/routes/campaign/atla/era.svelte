<script lang='ts'>
  import KyoshiEra from "../../comp/Setup/KyoshiEra.svelte";
  import RokuEra from "../../comp/Setup/RokuEra.svelte";
</script>
Choose an era:
<div class='cardtainer'>
  <div class='card'>
    <KyoshiEra start={2} />
  </div>
  <div class='card'>
    <RokuEra start={2} />
  </div>
</div>
<a href='/campaign/atla/scope'>Scope</a>