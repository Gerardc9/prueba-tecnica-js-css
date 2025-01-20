var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  <header>
    <h1>Unique Element Challenge</h1>
    <img src="./src/assets/logo.svg" alt="Logo" />
  </header>
  
  <main>
    <section class="main-content">
      <section>
        <h2>Target</h2>
        <div>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>
      </section>
    
      <section>
        <h2>Considerations</h2>
        <ul>
          <li>Values are duplicated only twice.</li>
          <li>There is only one non duplicate value.</li>
          <li>The non duplicate value can be placed anywhere on the array.</li>
          <li>The result must be an integer.</li>
        </ul>
      </section>
    </section>

    <aside class="sidebar">

      <section class="card test-data">
        <h2>Test Data</h2>
        <span>${arrayTest}</span>
      </section>


      <div class="container-result">
        <section class="card expected-result">
          <h3>Expected result</h3>
          <p>4</p>
        </section>

        <section class="card result">
          <h3>Your result</h3>
          <p>4</p>
        </section>
      </div>


    </aside>

  </main>
`;
