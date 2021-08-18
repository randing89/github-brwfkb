(async () => {
  const [hello, world] = await Promise.all([
    import('./a.js'),
    import('./b.js')
  ]);
  console.log(hello + world);
})();
