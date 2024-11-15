import { Component, xml } from "@odoo/owl";

import { Search } from "./Search";

export class Header extends Component {
  static template = xml`<header class="container-fluid" role="banner">
  <div class="container-fluid" role="heading">
    <div class="region region-header-top container-fluid homepage">
      <div class="row block-header-top sticky-hp">
        <div class="col-xs-4 col-sm-3 col-lg-2 block-header-top__menu">
          <a class="block-header-top__menu-btn">
            <img
              class="menu-icon block-header-top__menu-burger"
              src="http://localhost:3333/icons/menu_burger.svg"
            />
            <img
              class="menu-icon block-header-top__menu-close"
              src="http://localhost:3333/icons/menu_close.png"
            />
            <span class="block-header-top__menu-txt">Menu</span>
          </a>
        </div>

        <div class="col-xs-4 col-sm-6 col-lg-8 block-header-top__logo ">
          <a
            class="block-header-top__front-logo"
            href="/fr"
            title="Accueil"
            rel="home"
          >
            <img
              class="block-header-top__site-logo-close"
              src="http://localhost:3333/icons/bg_smile_uk_btn.png"
              alt="SMILE Open Source"
            />
            <img
              class="block-header-top__site-logo-open"
              src="http://localhost:3333/icons/logo-burger.png"
              alt="SMILE Open Source"
            />
          </a>
        </div>
        <div class="col-xs-1 col-sm-1 block-header-top_contact ">
          <div class="menu menu-external-link-container contact-header  ">
            <ul
              itemType="http://www.schema.org/SiteNavigationElement"
              class="level0 list-inline"
            >
              <li class="has-child">
                <a
                  href="https://blog.smile.eu/fr"
                  itemProp="url"
                  target="_blank"
                >
                  <span itemProp="name" class="hvr-icon-grow">
                    Blog
                  </span>
                </a>

                <ul class="level1 list-inline">
                  <li>
                    <a
                      href="https://blog.smile.eu/fr"
                      itemProp="url"
                      target="_blank"
                    >
                      <span itemProp="name" class="hvr-icon-grow">
                        Smile business blog
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tech.smile.eu"
                      itemProp="url"
                      target="_blank"
                    >
                      <span itemProp="name" class="hvr-icon-grow">
                        Technical blog
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://jobs.smile.eu" target="_blank">
                  <span class="hvr-icon-grow btn btn-orange">
                    Nous rejoindre
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/fr/contact"
                  itemProp="url"
                  target="_blank"
                  data-drupal-link-system-path="node/2204"
                >
                  <span
                    itemProp="name"
                    class="hvr-icon-grow btn btn-bleu"
                  >
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xs-3 col-sm-2 col-lg-1 block-header-top__language">
          <div class="block-switcher-language">
            <div class="en">
              <a
                href="/en"
                class="language-link"
              >
                en
              </a>
            </div>
            <div
              class="fr is-active"
            >
              <a
                href="/fr"
                class="language-link is-active"
              >
                fr
              </a>
            </div>
            <div class="nl">
              <a
                href="/en/benelux"
                class="language-link"
              >
                nl
              </a>
            </div>
          </div>
        </div>

        <div class="col-xs-1 col-sm-1 col-lg-1 block-header-top__search">
          <a class="block-header-top__btn-search" href="">
            <img
              class="block-header-top__btn-search_picture-close"
              src="http://localhost:3333/icons/research.svg"
            />
            <img
              class="block-header-top__btn-search_picture-open"
              src="http://localhost:3333/icons/search_white.svg"
            />
          </a>
        </div>
      </div>

      <div class="menu menu-external-link-container contact-header  ">
        <ul
          itemType="http://www.schema.org/SiteNavigationElement"
          class="level0 list-inline"
        >
          <li class="has-child">
            <a
              href="https://blog.smile.eu/fr"
              itemProp="url"
              target="_blank"
            >
              <span itemProp="name" class="hvr-icon-grow">
                Blog
              </span>
            </a>

            <ul class="level1 list-inline">
              <li>
                <a
                  href="https://blog.smile.eu/fr"
                  itemProp="url"
                  target="_blank"
                >
                  <span itemProp="name" class="hvr-icon-grow">
                    Smile business blog
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://tech.smile.eu"
                  itemProp="url"
                  target="_blank"
                >
                  <span itemProp="name" class="hvr-icon-grow">
                    Technical blog
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="http://jobs.smile.eu" target="_blank">
              <span class="hvr-icon-grow btn btn-orange">
                Nous rejoindre
              </span>
            </a>
          </li>
          <li>
            <a
              href="/fr/contact"
              itemProp="url"
              target="_blank"
              data-drupal-link-system-path="node/2204"
            >
              <span itemProp="name" class="hvr-icon-grow btn btn-bleu">
                Contact
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div
        id="block-smileeusearchblock"
        class="block block-smileeu-search block-smileeu-search-block clearfix search-bar-block"
      >
        <form
          class="smileeu-search-block-form"
          data-drupal-selector="smileeu-search-block-form"
          action="/fr/search_results"
          method="get"
          id="smileeu-search-block-form"
          acceptCharset="UTF-8"
          data-hs-cf-bound="true"
        >
          <div class="form-item js-form-item form-type-search js-form-type-search form-item-search-api-fulltext js-form-item-search-api-fulltext form-no-label form-group">
            <label
              htmlFor="edit-search-api-fulltext"
              class="control-label sr-only"
            >
              Mots-clés, technologies, etc.
            </label>
            <Search />
          </div>
          <div
            data-drupal-selector="edit-actions"
            class="form-actions form-group js-form-wrapper form-wrapper"
            id="edit-actions"
          >
            <div class="col-lg-2 col-sm-4 centre">
              <button
                data-twig-suggestion="search_smileeu_block"
                data-drupal-selector="edit-submit"
                class="button js-form-submit form-submit btn"
                type="submit"
                id="edit-submit"
                value="Je recherche"
                name=""
              >
                Je recherche
              </button>
            </div>
          </div>
        </form>

        <a class="close-search-bar-btn" href="">
          <img src="http://localhost:3333/icons/close_search.png" alt="" />
        </a>
      </div>
    </div>

    <div class="region region-header container-fluid homepage">
      <div
        id="block-menusblock"
        class="block block-smileeu-common block-smileeu-common-menus-block clearfix menu-header-homepage sticky-hp affix-top"
      >
        <div class="menu-part-left">
          <div class="menu menu-main menu-footer">
            <ul
              itemType="http://www.schema.org/SiteNavigationElement"
              class="level0 list-inline"
            >
              <li class="has-child">
                <a
                  href="/fr"
                  class="is-active"
                >
                  <span class="hvr-icon-grow">Groupe</span>
                </a>

                <ul class="level1 list-inline">
                  <li>
                    <a
                      href="/fr/groupe/qui-sommes-nous"
                      data-drupal-link-system-path="node/174"
                    >
                      <span class="hvr-icon-grow">
                        Qui sommes-nous ?
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/groupe/lopen-source-quest-ce-que-cest"
                      data-drupal-link-system-path="node/1718"
                    >
                      <span class="hvr-icon-grow">
                        L&apos;Open source
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/groupe/nos-valeurs"
                      data-drupal-link-system-path="node/137"
                    >
                      <span class="hvr-icon-grow">Nos valeurs</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/groupe/implantations"
                      data-drupal-link-system-path="node/88"
                    >
                      <span class="hvr-icon-grow">
                        Nos implantations
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/groupe/actualites"
                      data-drupal-link-system-path="node/89"
                    >
                      <span class="hvr-icon-grow">Actualités</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/groupe/liste-devenements"
                      itemProp="url"
                      data-drupal-link-system-path="node/52"
                    >
                      <span itemProp="name" class="hvr-icon-grow">
                        Evènements
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/groupe/media"
                      data-drupal-link-system-path="node/124"
                    >
                      <span class="hvr-icon-grow">Médias</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="has-child">
                <a
                  href="/fr"
                  class="is-active"
                >
                  <span class="hvr-icon-grow">Offres</span>
                </a>

                <ul class="level1 list-inline">
                  <li class="has-child">
                    <a
                      href="/fr/offres/digital"
                      itemProp="url"
                      data-drupal-link-system-path="node/148"
                    >
                      <span itemProp="name" class="hvr-icon-grow">
                        Digital
                      </span>
                    </a>

                    <ul class="level2 list-inline">
                      <li>
                        <a
                          href="/fr/offers/digital/e-commerce-starter-kit"
                          itemProp="url"
                          data-drupal-link-system-path="node/2112"
                        >
                          <span itemProp="name" class="hvr-icon-grow">
                            E-commerce Starter Kit
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="/fr/offres/business-apps"
                      data-drupal-link-system-path="node/169"
                    >
                      <span class="hvr-icon-grow">Business Apps</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/offres/embarque-iot"
                      data-drupal-link-system-path="node/168"
                    >
                      <span class="hvr-icon-grow">
                        Embedded &amp; IoT
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/offres/infrastructure"
                      data-drupal-link-system-path="node/171"
                    >
                      <span class="hvr-icon-grow">Infrastructure</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/fr/nos-references"
                  data-drupal-link-system-path="node/28"
                >
                  <span class="hvr-icon-grow">Références</span>
                </a>
              </li>
              <li>
                <a
                  href="/fr/technologies"
                  data-drupal-link-system-path="list-technologies"
                >
                  <span class="hvr-icon-grow">Technologies</span>
                </a>
              </li>
              <li>
                <a
                  href="/fr/publications/liste-livres-blancs"
                  itemProp="url"
                  data-drupal-link-system-path="list-white-papers"
                >
                  <span itemProp="name" class="hvr-icon-grow">
                    Livres blancs
                  </span>
                </a>
              </li>
              <li class="has-child">
                <a
                  href="/fr/innovation"
                  itemProp="url"
                  data-drupal-link-system-path="node/157"
                >
                  <span itemProp="name" class="hvr-icon-grow">
                    Innovation
                  </span>
                </a>

                <ul class="level1 list-inline">
                  <li>
                    <a
                      href="https://www.smile.eu/fr/innovation/recherche-developpement"
                      itemProp="url"
                      target="_blank"
                    >
                      <span itemProp="name" class="hvr-icon-grow">
                        Recherche et développement
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="/fr/conseil"
                  itemProp="url"
                  data-drupal-link-system-path="node/1918"
                >
                  
                  <span itemProp="name" class="hvr-icon-grow">
                    Conseil
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div
            class="col-xs-4 col-sm-6 col-lg-8 block-header-top__logo logo-header"
            style="display: 'none';"
          >
            <a
              class="block-header-top__front-logo"
              href="/fr"
              title="Accueil"
              rel="home"
            >
              <img
                class="block-header-top__site-logo-close"
                src="http://localhost:3333/icons/bg_smile_uk_btn.png"
                alt="SMILE Open Source"
              />
            </a>
          </div>
        </div>
        <div class="col-xs-1 col-sm-1 col-lg-1 block-header-top__search search_head">
          <a class="block-header-top__btn-search" href="">
            <img
              class="block-header-top__btn-search_picture-close"
              src="http://localhost:3333/icons/research.svg"
            />
          </a>
        </div>
        <div class="menu-part-right">
          <div class="menu menu-external-link-container contact-header  ">
            <ul
              itemType="http://www.schema.org/SiteNavigationElement"
              class="level0 list-inline"
            >
              <li class="has-child">
                <a
                  href="https://blog.smile.eu/fr"
                  itemProp="url"
                  target="_blank"
                >
                  
                  <span itemProp="name" class="hvr-icon-grow">
                    Blog
                  </span>
                </a>

                <ul class="level1 list-inline">
                  <li>
                    <a
                      href="https://blog.smile.eu/fr"
                      itemProp="url"
                      target="_blank"
                    >
                      
                      <span itemProp="name" class="hvr-icon-grow">
                        Smile business blog
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tech.smile.eu"
                      itemProp="url"
                      target="_blank"
                    >
                      
                      <span itemProp="name" class="hvr-icon-grow">
                        Technical blog
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://jobs.smile.eu" target="_blank">
                  
                  <span class="hvr-icon-grow btn btn-orange">
                    Nous rejoindre
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="/fr/contact"
                  itemProp="url"
                  target="_blank"
                  data-drupal-link-system-path="node/2204"
                >
                  
                  <span
                    itemProp="name"
                    class="hvr-icon-grow btn btn-bleu"
                  >
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div class="block-switcher-language">
            <div class="en">
              <a
                href="/en"
                class="language-link"
              >
                en
              </a>
            </div>
            <div
              class="fr is-active"
            >
              <a
                href="/fr"
                class="language-link is-active"
              >
                fr
              </a>
            </div>
            <div class="nl">
              <a
                href="/en/benelux"
                class="language-link"
              >
                nl
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="block-menusblock"
        class="block block-smileeu-common block-smileeu-common-menus-block clearfix menu-header"
      >
        <div class="menu-container">
          <div class="menu-wrapper">
            <div class="menu menu-main menu-footer">
              <ul
                itemType="http://www.schema.org/SiteNavigationElement"
                class="level0 list-inline"
              >
                <li class="has-child">
                  <a
                    href="/fr"
                    class="is-active"
                  >
                    
                    <span class="hvr-icon-grow">Groupe</span>
                  </a>

                  <ul class="level1 list-inline">
                    <li>
                      <a
                        href="/fr/groupe/qui-sommes-nous"
                        data-drupal-link-system-path="node/174"
                      >
                        
                        <span class="hvr-icon-grow">
                          Qui sommes-nous ?
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/groupe/lopen-source-quest-ce-que-cest"
                        data-drupal-link-system-path="node/1718"
                      >
                        
                        <span class="hvr-icon-grow">
                          L&apos;Open source
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/groupe/nos-valeurs"
                        data-drupal-link-system-path="node/137"
                      >
                        
                        <span class="hvr-icon-grow">Nos valeurs</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/groupe/implantations"
                        data-drupal-link-system-path="node/88"
                      >
                        
                        <span class="hvr-icon-grow">
                          Nos implantations
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/groupe/actualites"
                        data-drupal-link-system-path="node/89"
                      >
                        
                        <span class="hvr-icon-grow">Actualités</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/groupe/liste-devenements"
                        itemProp="url"
                        data-drupal-link-system-path="node/52"
                      >
                        
                        <span itemProp="name" class="hvr-icon-grow">
                          Evènements
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/groupe/media"
                        data-drupal-link-system-path="node/124"
                      >
                        
                        <span class="hvr-icon-grow">Médias</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="has-child">
                  <a
                    href="/fr"
                    class="is-active"
                  >
                    
                    <span class="hvr-icon-grow">Offres</span>
                  </a>

                  <ul class="level1 list-inline">
                    <li class="has-child">
                      <a
                        href="/fr/offres/digital"
                        itemProp="url"
                        data-drupal-link-system-path="node/148"
                      >
                        
                        <span itemProp="name" class="hvr-icon-grow">
                          Digital
                        </span>
                      </a>

                      <ul class="level2 list-inline">
                        <li>
                          <a
                            href="/fr/offers/digital/e-commerce-starter-kit"
                            itemProp="url"
                            data-drupal-link-system-path="node/2112"
                          >
                            
                            <span itemProp="name" class="hvr-icon-grow">
                              E-commerce Starter Kit
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="/fr/offres/business-apps"
                        data-drupal-link-system-path="node/169"
                      >
                        
                        <span class="hvr-icon-grow">Business Apps</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/offres/embarque-iot"
                        data-drupal-link-system-path="node/168"
                      >
                        
                        <span class="hvr-icon-grow">
                          Embedded &amp; IoT
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/offres/infrastructure"
                        data-drupal-link-system-path="node/171"
                      >
                        
                        <span class="hvr-icon-grow">
                          Infrastructure
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/fr/nos-references"
                    data-drupal-link-system-path="node/28"
                  >
                    
                    <span class="hvr-icon-grow">Références</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/fr/technologies"
                    data-drupal-link-system-path="list-technologies"
                  >
                    
                    <span class="hvr-icon-grow">Technologies</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/fr/publications/liste-livres-blancs"
                    itemProp="url"
                    data-drupal-link-system-path="list-white-papers"
                  >
                    
                    <span itemProp="name" class="hvr-icon-grow">
                      Livres blancs
                    </span>
                  </a>
                </li>
                <li class="has-child">
                  <a
                    href="/fr/innovation"
                    itemProp="url"
                    data-drupal-link-system-path="node/157"
                  >
                    
                    <span itemProp="name" class="hvr-icon-grow">
                      Innovation
                    </span>
                  </a>

                  <ul class="level1 list-inline">
                    <li>
                      <a
                        href="https://www.smile.eu/fr/innovation/recherche-developpement"
                        itemProp="url"
                        target="_blank"
                      >
                        
                        <span itemProp="name" class="hvr-icon-grow">
                          Recherche et développement
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="/fr/conseil"
                    itemProp="url"
                    data-drupal-link-system-path="node/1918"
                  >
                    
                    <span itemProp="name" class="hvr-icon-grow">
                      Conseil
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div class="menu menu-external-link-container contact-header  ">
              <ul
                itemType="http://www.schema.org/SiteNavigationElement"
                class="level0 list-inline"
              >
                <li class="has-child">
                  <a
                    href="https://blog.smile.eu/fr"
                    itemProp="url"
                    target="_blank"
                  >
                    
                    <span itemProp="name" class="hvr-icon-grow">
                      Blog
                    </span>
                  </a>

                  <ul class="level1 list-inline">
                    <li>
                      <a
                        href="https://blog.smile.eu/fr"
                        itemProp="url"
                        target="_blank"
                      >
                        
                        <span itemProp="name" class="hvr-icon-grow">
                          Smile business blog
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tech.smile.eu"
                        itemProp="url"
                        target="_blank"
                      >
                        
                        <span itemProp="name" class="hvr-icon-grow">
                          Technical blog
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="http://jobs.smile.eu" target="_blank">
                    
                    <span class="hvr-icon-grow btn btn-orange">
                      Nous rejoindre
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/fr/contact"
                    itemProp="url"
                    target="_blank"
                    data-drupal-link-system-path="node/2204"
                  >
                    
                    <span
                      itemProp="name"
                      class="hvr-icon-grow btn btn-bleu"
                    >
                      Contact
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>`;
  static components = { Search };
}
