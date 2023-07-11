import React from 'react'
import { Link } from 'react-router-dom'

export default function Header1() {
    return (
        <div>
            <header id="header" class="header fixed-top d-flex align-items-center">
                <div class="container d-flex align-items-center justify-content-between">

                    <Link to={"/"}><a class="logo d-flex align-items-center me-auto me-lg-0">
                        <h1>Yummy<span>.</span></h1>
                    </a>
                    </Link>

                    <nav id="navbar" class="navbar">
                        <ul>
                            <Link to= { '/about'}><a>About</a></Link>
                            <Link to={'/menu'}><a>Menu</a></Link>
                            <Link to={'/chefs'}><a>Chefs</a></Link>
                            <Link><a>Contact</a></Link>
                        </ul>
                    </nav>


                    <a class="btn-book-a-table" href="#book-a-table">Book a Table</a>
                    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>







        </div>
    )
}
