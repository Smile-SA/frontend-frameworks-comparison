import { Component, xml } from "@odoo/owl";

export class Footer extends Component {
  static template = xml`<footer class="footer container-fluid" role="contentinfo">
  <div class="region-footer-top">
    <div class="region-footer-top">
      <div id="block-socialmedialinks" class="block-social-media-links">
        <h4 class="social-text">Follow us :</h4>

        <span
          itemType="http://schema.org/Organization"
          class="platforms inline horizontal"
        >
          <link itemProp="url" href="http://www.smile.eu/fr" />
          <a
            itemProp="sameAs"
            href="https://www.twitter.com/GroupeSmile"
            target="_blank"
          >
            <span class="fab fa-twitter fa-2x"></span>
          </a>

          <a
            itemProp="sameAs"
            href="https://www.instagram.com/smile.for.it/"
            target="_blank"
          >
            <span class="fab fa-instagram fa-2x"></span>
          </a>

          <a
            itemProp="sameAs"
            href="https://www.linkedin.com/company/smile"
            target="_blank"
          >
            <span class="fab fa-linkedin fa-2x"></span>
          </a>

          <a
            itemProp="sameAs"
            href="https://github.com/Smile-SA"
            target="_blank"
          >
            <span class="fab fa-github fa-2x"></span>
          </a>

          <a
            itemProp="sameAs"
            href="https://www.slideshare.net/smileopensource"
            target="_blank"
          >
            <span class="fab fa-slideshare fa-2x"></span>
          </a>

          <a
            itemProp="sameAs"
            href="https://www.youtube.com/user/SmileOpenSource"
            target="_blank"
          >
            <span class="fab fa-youtube fa-2x"></span>
          </a>
        </span>

        <div class="line-separator"></div>
      </div>

      <nav
        role="navigation"
        aria-labelledby="block-mainnavigation-menu"
        id="block-mainnavigation"
      >
        <h2 class="sr-only" id="block-mainnavigation-menu">
          Main navigation
        </h2>

        <div class="menu menu-main menu-footer">
          <ul
            itemType="http://www.schema.org/SiteNavigationElement"
            class="level0 list-inline"
          >
            <li class="has-child">
              <a
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
                    
                    <span class="hvr-icon-grow">Qui sommes-nous ?</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/fr/groupe/lopen-source-quest-ce-que-cest"
                    data-drupal-link-system-path="node/1718"
                  >
                    
                    <span class="hvr-icon-grow">L&apos;Open source</span>
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
                    
                    <span class="hvr-icon-grow">Nos implantations</span>
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
                class="is-active"
              >
                
                <span class="hvr-icon-grow">Offres</span>
              </a>

              <ul class="level1 list-inline">
                <li>
                  <a
                    href="/fr/offres/digital"
                    itemProp="url"
                    data-drupal-link-system-path="node/148"
                  >
                    
                    <span itemProp="name" class="hvr-icon-grow">
                      Digital
                    </span>
                  </a>
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
              <a itemProp="url" data-drupal-link-system-path="node/157">
                
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
      </nav>

      <div class="footer-contact">
        <div class="contact-button">
          <a href="/fr/contact">Contactez-nous</a>
        </div>
      </div>

      <nav
        role="navigation"
        aria-labelledby="block-menufooterexternalsites-menu"
        id="block-menufooterexternalsites"
      >
        <h2
          class="visually-hidden"
          id="block-menufooterexternalsites-menu"
        >
          Menu footer external sites
        </h2>

        <ul
          itemType="http://www.schema.org/SiteNavigationElement"
          class="menu nav"
        >
          <li>
            <a href="http://jobs.smile.eu" target="_blank">
              
              <span class="hvr-icon-grow">Nous rejoindre</span>
            </a>
          </li>

          <li class="expanded dropdown">
            <a
              href="https://blog.smile.eu/fr"
              class="dropdown-toggle"
              target="_blank"
              data-target="#"
              data-toggle="dropdown"
              itemProp="url"
            >
              <span itemProp="name" class="hvr-icon-grow">
                Blog
              </span>
              <span class="caret"></span>
            </a>
            <ul class="menu dropdown-menu">
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
            <a
              href="http://formations.opensourceschool.fr/"
              target="_blank"
            >
              
              <span class="hvr-icon-grow">Open Source School</span>
            </a>
          </li>

          <li>
            <a href="https://open-source-guide.com" target="_blank">
              
              <span class="hvr-icon-grow">Open Source Guide</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div class="region-footer">
      <div class="footer-content">
        <div class="logo-footer"></div>
        <section class="block-content block-content-basic">
          <div class="field field--name-body field--type-text-with-summary field--label-hidden field--item">
            <p>
              Any time we start something new it is exciting and we are very
              motivated and committed.
            </p>
          </div>
        </section>
      </div>

      <div class="footer-menu-footer">
        <span class="copiright">©Smile 2023</span>
        <nav
          role="navigation"
          aria-labelledby="block-smileeu-footer-menu"
          id="block-smileeu-footer"
        >
          <h2 class="visually-hidden" id="block-smileeu-footer-menu">
            Footer menu
          </h2>

          <ul class="menu nav">
            <li>
              <a href="/fr/contact" data-drupal-link-system-path="contact">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/fr/mentions-legales"
                data-drupal-link-system-path="node/69"
              >
                Mentions légales
              </a>
            </li>
            <li>
              <a
                href="/fr/politique-protection-donnees-personnelles"
                data-drupal-link-system-path="node/68"
              >
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</footer>`;
}
