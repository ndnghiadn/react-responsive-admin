import React from "react";

import { NavLink } from "react-router-dom";
import { Home, Grid, FileText, Layout, Briefcase, Package, Gift, } from "react-feather";
import { useState } from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { isDisplay } = useSelector((state) => state.toggleDisplaySidebar);

  return (
    <>
      {
        isDisplay && (
          <div className="left-side-menu">
            <div className="h-100">
              <div className="sidebar-content">
                <div className="sidebar-icon-menu h-100" data-simplebar>
                  <a href="index.html" className="logo">
                    <span>
                      <img src="assets/images/logo-sm-light.png" alt height={28} />
                    </span>
                  </a>
                  <nav className="nav flex-column" id="two-col-sidenav-main">
                    <a className="nav-link" href="#dashboard" title="Dashboard">
                      <Home />
                    </a>
                    <a className="nav-link" href="#apps" title="Apps">
                      <Grid />
                    </a>
                    <a className="nav-link" href="#pages" title="Pages">
                    <FileText />
                    </a>
                    <a className="nav-link" href="#layouts" title="Layouts">
                    <Layout />
                    </a>
                    <a className="nav-link" href="#uielements" title="UI Elements">
                      <Briefcase />
                    </a>
                    <a className="nav-link" href="#components" title="Components">
                    <Package />
                    </a>
                    <a className="nav-link" href="widgets.html" title="Widgets">
                    <Gift />
                    </a>
                  </nav>
                </div>

                <div className="sidebar-main-menu">
                  <div id="two-col-menu" className="h-100" data-simplebar>
                    <div className="twocolumn-menu-item d-block" id="dashboard">
                      <div className="title-box">
                        <h5 className="menu-title">Dashboards</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="index.html">
                              Dashboard 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="dashboard-2.html">
                              Dashboard 2
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="dashboard-3.html">
                              Dashboard 3
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="dashboard-4.html">
                              Dashboard 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="twocolumn-menu-item" id="apps">
                      <h5 className="menu-title">Apps</h5>
                      <ul className="nav flex-column">
                        <li className="nav-item">
                          <a className="nav-link" href="apps-calendar.html">
                            Calendar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="apps-chat.html">
                            Chat
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#sidebarEcommerce"
                            data-bs-toggle="collapse"
                            className="nav-link"
                          >
                            <span> Ecommerce </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarEcommerce">
                            <ul className="nav-second-level">
                              <li>
                                <a href="ecommerce-dashboard.html">Dashboard</a>
                              </li>
                              <li>
                                <a href="ecommerce-products.html">Products</a>
                              </li>
                              <li>
                                <a href="ecommerce-product-detail.html">
                                  Product Detail
                                </a>
                              </li>
                              <li>
                                <a href="ecommerce-product-edit.html">Add Product</a>
                              </li>
                              <li>
                                <a href="ecommerce-customers.html">Customers</a>
                              </li>
                              <li>
                                <a href="ecommerce-orders.html">Orders</a>
                              </li>
                              <li>
                                <a href="ecommerce-order-detail.html">Order Detail</a>
                              </li>
                              <li>
                                <a href="ecommerce-sellers.html">Sellers</a>
                              </li>
                              <li>
                                <a href="ecommerce-cart.html">Shopping Cart</a>
                              </li>
                              <li>
                                <a href="ecommerce-checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#sidebarCrm"
                            data-bs-toggle="collapse"
                            className="nav-link"
                          >
                            <span> CRM </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarCrm">
                            <ul className="nav-second-level">
                              <li>
                                <a href="crm-dashboard.html">Dashboard</a>
                              </li>
                              <li>
                                <a href="crm-contacts.html">Contacts</a>
                              </li>
                              <li>
                                <a href="crm-opportunities.html">Opportunities</a>
                              </li>
                              <li>
                                <a href="crm-leads.html">Leads</a>
                              </li>
                              <li>
                                <a href="crm-customers.html">Customers</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#sidebarEmail"
                            data-bs-toggle="collapse"
                            className="nav-link"
                          >
                            <span> Email </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarEmail">
                            <ul className="nav-second-level">
                              <li>
                                <a href="email-inbox.html">Inbox</a>
                              </li>
                              <li>
                                <a href="email-read.html">Read Email</a>
                              </li>
                              <li>
                                <a href="email-compose.html">Compose Email</a>
                              </li>
                              <li>
                                <a href="email-templates.html">Email Templates</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="apps-social-feed.html">
                            Social Feed
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="apps-companies.html">
                            Companies
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#sidebarProjects"
                            data-bs-toggle="collapse"
                            className="nav-link"
                          >
                            <span> Projects </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarProjects">
                            <ul className="nav-second-level">
                              <li>
                                <a href="project-list.html">List</a>
                              </li>
                              <li>
                                <a href="project-detail.html">Detail</a>
                              </li>
                              <li>
                                <a href="project-create.html">Create Project</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#sidebarTasks"
                            data-bs-toggle="collapse"
                            className="nav-link"
                          >
                            <span> Tasks </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarTasks">
                            <ul className="nav-second-level">
                              <li>
                                <a href="task-list.html">List</a>
                              </li>
                              <li>
                                <a href="task-details.html">Details</a>
                              </li>
                              <li>
                                <a href="task-kanban-board.html">Kanban Board</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#sidebarContacts"
                            data-bs-toggle="collapse"
                            className="nav-link"
                          >
                            <span> Contacts </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarContacts">
                            <ul className="nav-second-level">
                              <li>
                                <a href="contacts-list.html">Members List</a>
                              </li>
                              <li>
                                <a href="contacts-profile.html">Profile</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#sidebarTickets"
                            data-bs-toggle="collapse"
                            className="nav-link"
                          >
                            <span> Tickets </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarTickets">
                            <ul className="nav-second-level">
                              <li>
                                <a href="tickets-list.html">List</a>
                              </li>
                              <li>
                                <a href="tickets-detail.html">Detail</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="apps-file-manager.html">
                            File Manager
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="twocolumn-menu-item" id="pages">
                      <div className="title-box">
                        <h5 className="menu-title">Pages</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="pages-starter.html">
                              Starter
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages-timeline.html">
                              Timeline
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages-sitemap.html">
                              Sitemap
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages-invoice.html">
                              Invoice
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages-faqs.html">
                              FAQs
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages-search-results.html">
                              Search Results
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages-pricing.html">
                              Pricing
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages-maintenance.html">
                              Maintenance
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages-coming-soon.html">
                              Coming Soon
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="pages-gallery.html">
                              Gallery
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarAuth"
                              data-bs-toggle="collapse"
                              className="nav-link"
                            >
                              <span> Auth Pages </span>
                              <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarAuth">
                              <ul className="nav-second-level">
                                <li>
                                  <a href="auth-login.html">Log In</a>
                                </li>
                                <li>
                                  <a href="auth-login-2.html">Log In 2</a>
                                </li>
                                <li>
                                  <a href="auth-register.html">Register</a>
                                </li>
                                <li>
                                  <a href="auth-register-2.html">Register 2</a>
                                </li>
                                <li>
                                  <a href="auth-signin-signup.html">
                                    Signin - Signup
                                  </a>
                                </li>
                                <li>
                                  <a href="auth-signin-signup-2.html">
                                    Signin - Signup 2
                                  </a>
                                </li>
                                <li>
                                  <a href="auth-recoverpw.html">Recover Password</a>
                                </li>
                                <li>
                                  <a href="auth-recoverpw-2.html">
                                    Recover Password 2
                                  </a>
                                </li>
                                <li>
                                  <a href="auth-lock-screen.html">Lock Screen</a>
                                </li>
                                <li>
                                  <a href="auth-lock-screen-2.html">Lock Screen 2</a>
                                </li>
                                <li>
                                  <a href="auth-logout.html">Logout</a>
                                </li>
                                <li>
                                  <a href="auth-logout-2.html">Logout 2</a>
                                </li>
                                <li>
                                  <a href="auth-confirm-mail.html">Confirm Mail</a>
                                </li>
                                <li>
                                  <a href="auth-confirm-mail-2.html">
                                    Confirm Mail 2
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarErrors"
                              data-bs-toggle="collapse"
                              className="nav-link"
                            >
                              Error Pages <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarErrors">
                              <ul className="nav-second-level">
                                <li>
                                  <a href="pages-404.html">Error 404</a>
                                </li>
                                <li>
                                  <a href="pages-404-two.html">Error 404 Two</a>
                                </li>
                                <li>
                                  <a href="pages-404-alt.html">Error 404-alt</a>
                                </li>
                                <li>
                                  <a href="pages-500.html">Error 500</a>
                                </li>
                                <li>
                                  <a href="pages-500-two.html">Error 500 Two</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="twocolumn-menu-item" id="layouts">
                      <div className="title-box">
                        <h5 className="menu-title">Layouts</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="layouts-vertical.html">
                              Vertical
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="layouts-horizontal.html">
                              Horizontal
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="layouts-detached.html">
                              Detached
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="layouts-two-tone-icons.html"
                            >
                              Two Tones Icons
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="layouts-preloader.html">
                              Preloader
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="twocolumn-menu-item" id="uielements">
                      <div className="title-box">
                        <h5 className="menu-title">UI Elements</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link" href="ui-buttons.html">
                              Buttons
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-cards.html">
                              Cards
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-avatars.html">
                              Avatars
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-portlets.html">
                              Portlets
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-tabs-accordions.html">
                              Tabs &amp; Accordions
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-modals.html">
                              Modals
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-progress.html">
                              Progress
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-notifications.html">
                              Notifications
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-offcanvas.html">
                              Offcanvas
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-placeholders.html">
                              Placeholders
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-spinners.html">
                              Spinners
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-images.html">
                              Images
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-carousel.html">
                              Carousel
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-list-group.html">
                              List Group
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-video.html">
                              Embed Video
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-dropdowns.html">
                              Dropdowns
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-ribbons.html">
                              Ribbons
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-tooltips-popovers.html">
                              Tooltips &amp; Popovers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-general.html">
                              General UI
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-typography.html">
                              Typography
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="ui-grid.html">
                              Grid
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="twocolumn-menu-item" id="components">
                      <div className="title-box">
                        <h5 className="menu-title">Components</h5>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a
                              href="#sidebarExtendedui"
                              data-bs-toggle="collapse"
                              className="nav-link"
                            >
                              <span className="badge bg-info float-end">Hot</span>
                              <span> Extended UI </span>
                            </a>
                            <div className="collapse" id="sidebarExtendedui">
                              <ul className="nav-second-level">
                                <li>
                                  <a href="extended-nestable.html">Nestable List</a>
                                </li>
                                <li>
                                  <a href="extended-range-slider.html">
                                    Range Slider
                                  </a>
                                </li>
                                <li>
                                  <a href="extended-dragula.html">Dragula</a>
                                </li>
                                <li>
                                  <a href="extended-animation.html">Animation</a>
                                </li>
                                <li>
                                  <a href="extended-sweet-alert.html">Sweet Alert</a>
                                </li>
                                <li>
                                  <a href="extended-tour.html">Tour Page</a>
                                </li>
                                <li>
                                  <a href="extended-scrollspy.html">Scrollspy</a>
                                </li>
                                <li>
                                  <a href="extended-loading-buttons.html">
                                    Loading Buttons
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarIcons"
                              data-bs-toggle="collapse"
                              className="nav-link"
                            >
                              <span> Icons </span>
                              <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarIcons">
                              <ul className="nav-second-level">
                                <li>
                                  <a href="icons-material-symbols.html">
                                    Material Symbols{" "}
                                  </a>
                                </li>
                                <li>
                                  <a href="icons-two-tone.html">Two Tone Icons</a>
                                </li>
                                <li>
                                  <a href="icons-feather.html">Feather Icons</a>
                                </li>
                                <li>
                                  <a href="icons-mdi.html">Material Design Icons</a>
                                </li>
                                <li>
                                  <a href="icons-dripicons.html">Dripicons</a>
                                </li>
                                <li>
                                  <a href="icons-font-awesome.html">Font Awesome 5</a>
                                </li>
                                <li>
                                  <a href="icons-themify.html">Themify</a>
                                </li>
                                <li>
                                  <a href="icons-simple-line.html">Simple Line</a>
                                </li>
                                <li>
                                  <a href="icons-weather.html">Weather</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarForms"
                              data-bs-toggle="collapse"
                              className="nav-link"
                            >
                              <span> Forms </span>
                              <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarForms">
                              <ul className="nav-second-level">
                                <li>
                                  <a href="forms-elements.html">General Elements</a>
                                </li>
                                <li>
                                  <a href="forms-advanced.html">Advanced</a>
                                </li>
                                <li>
                                  <a href="forms-validation.html">Validation</a>
                                </li>
                                <li>
                                  <a href="forms-pickers.html">Pickers</a>
                                </li>
                                <li>
                                  <a href="forms-wizard.html">Wizard</a>
                                </li>
                                <li>
                                  <a href="forms-masks.html">Masks</a>
                                </li>
                                <li>
                                  <a href="forms-quilljs.html">Quilljs Editor</a>
                                </li>
                                <li>
                                  <a href="forms-file-uploads.html">File Uploads</a>
                                </li>
                                <li>
                                  <a href="forms-x-editable.html">X Editable</a>
                                </li>
                                <li>
                                  <a href="forms-image-crop.html">Image Crop</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarTables"
                              data-bs-toggle="collapse"
                              className="nav-link"
                            >
                              <span> Tables </span>
                              <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarTables">
                              <ul className="nav-second-level">
                                <li>
                                  <a href="tables-basic.html">Basic Tables</a>
                                </li>
                                <li>
                                  <a href="tables-datatables.html">Data Tables</a>
                                </li>
                                <li>
                                  <a href="tables-editable.html">Editable Tables</a>
                                </li>
                                <li>
                                  <a href="tables-responsive.html">
                                    Responsive Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="tables-footables.html">FooTable</a>
                                </li>
                                <li>
                                  <a href="tables-bootstrap.html">Bootstrap Tables</a>
                                </li>
                                <li>
                                  <a href="tables-tablesaw.html">Tablesaw Tables</a>
                                </li>
                                <li>
                                  <a href="tables-jsgrid.html">JsGrid Tables</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarCharts"
                              data-bs-toggle="collapse"
                              className="nav-link"
                            >
                              <span> Charts </span>
                              <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarCharts">
                              <ul className="nav-second-level">
                                <li>
                                  <a href="charts-apex.html">Apex Charts</a>
                                </li>
                                <li>
                                  <a href="charts-flot.html">Flot Charts</a>
                                </li>
                                <li>
                                  <a href="charts-morris.html">Morris Charts</a>
                                </li>
                                <li>
                                  <a href="charts-chartjs.html">Chartjs Charts</a>
                                </li>
                                <li>
                                  <a href="charts-peity.html">Peity Charts</a>
                                </li>
                                <li>
                                  <a href="charts-chartist.html">Chartist Charts</a>
                                </li>
                                <li>
                                  <a href="charts-c3.html">C3 Charts</a>
                                </li>
                                <li>
                                  <a href="charts-sparklines.html">
                                    Sparklines Charts
                                  </a>
                                </li>
                                <li>
                                  <a href="charts-knob.html">Jquery Knob Charts</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarMaps"
                              data-bs-toggle="collapse"
                              className="nav-link"
                            >
                              <span> Maps </span>
                              <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarMaps">
                              <ul className="nav-second-level">
                                <li>
                                  <a href="maps-google.html">Google Maps</a>
                                </li>
                                <li>
                                  <a href="maps-vector.html">Vector Maps</a>
                                </li>
                                <li>
                                  <a href="maps-mapael.html">Mapael Maps</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#sidebarMultilevel"
                              data-bs-toggle="collapse"
                              className="nav-link"
                            >
                              <span> Multi Level </span>
                              <span className="menu-arrow" />
                            </a>
                            <div className="collapse" id="sidebarMultilevel">
                              <ul className="nav-second-level">
                                <li>
                                  <a
                                    href="#sidebarMultilevel2"
                                    data-bs-toggle="collapse"
                                  >
                                    Second Level <span className="menu-arrow" />
                                  </a>
                                  <div className="collapse" id="sidebarMultilevel2">
                                    <ul className="nav-second-level">
                                      <li>
                                        <a href="javascript: void(0);">Item 1</a>
                                      </li>
                                      <li>
                                        <a href="javascript: void(0);">Item 2</a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <a
                                    href="#sidebarMultilevel3"
                                    data-bs-toggle="collapse"
                                  >
                                    Third Level <span className="menu-arrow" />
                                  </a>
                                  <div className="collapse" id="sidebarMultilevel3">
                                    <ul className="nav-second-level">
                                      <li>
                                        <a href="javascript: void(0);">Item 1</a>
                                      </li>
                                      <li>
                                        <a
                                          href="#sidebarMultilevel4"
                                          data-bs-toggle="collapse"
                                        >
                                          Item 2 <span className="menu-arrow" />
                                        </a>
                                        <div
                                          className="collapse"
                                          id="sidebarMultilevel4"
                                        >
                                          <ul className="nav-second-level">
                                            <li>
                                              <a href="javascript: void(0);">
                                                Item 1
                                              </a>
                                            </li>
                                            <li>
                                              <a href="javascript: void(0);">
                                                Item 2
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

export default Sidebar;
