import Link from "next/link";

export default function Home() {
  return (
        
        <>
        <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link href="/" class="nav-link px-2 text-secondary">Home</Link></li>
          <li><Link href="/service" class="nav-link px-2 text-white">Service</Link></li>
          <li><Link href="/contact" class="nav-link px-2 text-white">Contact</Link></li>
          <li><Link href="/about" class="nav-link px-2 text-white">About</Link></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
            </input>
        </form>

        <div class="text-end">
        <Link href="/login"><button type="button" class="btn btn-outline-light me-2">Login</button></Link>
        <Link href="/signup"><button type="button" class="btn btn-warning">Sign-up</button></Link>
        </div>
      </div>
    </div>
  </header>
        </>

  );
}