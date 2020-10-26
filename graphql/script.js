function graphqlbtn() {
  fetch('https://iosetpro.com:4000/graphql', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query: `
                query {
                  continents {
                    name
                  }
                }
              `
          })
      })
      .then(r => r.json())
      .then(data => console.log('data returned:', data));
}