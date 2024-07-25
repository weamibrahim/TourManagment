import './Footer.css';
function Footer() {
  return (

    <div>
    <footer class="bg-body-tertiary text-center">


      <div class="container ">
        <section class="mb-4">
         <a
            data-mdb-ripple-init
            class="btn text-white btn-floating mx-2 mt-3"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          ><i class="fab fa-facebook-f"></i
          ></a>


          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating mx-2 mt-3"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          ><i class="fab fa-twitter"></i
          ></a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating mx-2 mt-3"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          ><i class="fab fa-google"></i
          ></a>


          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating mx-2 mt-3"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          ><i class="fab fa-instagram"></i
          ></a>


          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating mx-2 mt-3"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          ><i class="fab fa-linkedin-in"></i
          ></a>

          <a
            data-mdb-ripple-init
            class="btn text-white btn-floating mx-2 mt-3"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          ><i class="fab fa-github"></i
          ></a>
        </section>
      </div>


      <div class="text-center p-3" style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}>
        © 2024 Copyright:

      </div>

    </footer>
</div>
  );
}
export default Footer