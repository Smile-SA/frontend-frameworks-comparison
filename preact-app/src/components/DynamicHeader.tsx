"use client";

import { useRef, useState } from "preact/hooks";
import classNames from "classnames";

import DynamicSearch from "./DynamicSearch";

export default function DynamicHeader() {
  const rootRef = useRef<HTMLHeadElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuChildrenOpen, setMenuChildrenOpen] = useState<number | undefined>(
    undefined,
  );

  const height =
    typeof document !== "undefined"
      ? document.body.offsetHeight - (rootRef.current?.offsetHeight ?? 0)
      : 0;

  function handleToggleSearch(e: MouseEvent) {
    e.preventDefault();
    setSearchOpen((x) => !x);
  }

  function handleToggleMenu(e: MouseEvent) {
    e.preventDefault();
    setMenuOpen((x) => !x);
  }

  function handleToggleMenuChildren(e: MouseEvent, index: number) {
    e.preventDefault();
    setMenuChildrenOpen((x) => (x === index ? undefined : index));
  }

  return (
    <header className="container-fluid" role="banner" ref={rootRef}>
      <div className="container-fluid" role="heading">
        <div className="region region-header-top container-fluid homepage">
          <div
            className={classNames("row block-header-top sticky-hp", {
              "opened-menu": menuOpen,
            })}
          >
            <div className="col-xs-4 col-sm-3 col-lg-2 block-header-top__menu">
              <a
                className={classNames("block-header-top__menu-btn", {
                  "menu-close": menuOpen,
                })}
                onClick={handleToggleMenu}
              >
                <img
                  className="menu-icon block-header-top__menu-burger"
                  src="http://localhost:3333/icons/menu_burger.svg"
                />
                <img
                  className="menu-icon block-header-top__menu-close"
                  src="http://localhost:3333/icons/menu_close.png"
                />
                <span className="block-header-top__menu-txt">Menu</span>
              </a>
            </div>

            <div className="col-xs-4 col-sm-6 col-lg-8 block-header-top__logo ">
              <a
                className="block-header-top__front-logo"
                href="/fr"
                title="Accueil"
                rel="home"
              >
                <img
                  className="block-header-top__site-logo-close"
                  src="http://localhost:3333/icons/bg_smile_uk_btn.png"
                  alt="SMILE Open Source"
                />
                <img
                  className="block-header-top__site-logo-open"
                  src="http://localhost:3333/icons/logo-burger.png"
                  alt="SMILE Open Source"
                />
              </a>
            </div>
            <div className="col-xs-1 col-sm-1 block-header-top_contact ">
              <div className="menu menu-external-link-container contact-header  ">
                <ul
                  itemType="http://www.schema.org/SiteNavigationElement"
                  className="level0 list-inline"
                >
                  <li className="has-child">
                    <a
                      href="https://blog.smile.eu/fr"
                      itemProp="url"
                      target="_blank"
                    >
                      {" "}
                      <span itemProp="name" className="hvr-icon-grow">
                        Blog
                      </span>
                    </a>

                    <ul className="level1 list-inline">
                      <li>
                        <a
                          href="https://blog.smile.eu/fr"
                          itemProp="url"
                          target="_blank"
                        >
                          {" "}
                          <span itemProp="name" className="hvr-icon-grow">
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
                          {" "}
                          <span itemProp="name" className="hvr-icon-grow">
                            Technical blog
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="http://jobs.smile.eu" target="_blank">
                      {" "}
                      <span className="hvr-icon-grow btn btn-orange">
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
                      {" "}
                      <span
                        itemProp="name"
                        className="hvr-icon-grow btn btn-bleu"
                      >
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-3 col-sm-2 col-lg-1 block-header-top__language">
              <div className="block-switcher-language">
                <div data-drupal-link-system-path="<front>" className="en">
                  <a
                    href="/en"
                    className="language-link"
                    data-drupal-link-system-path="<front>"
                  >
                    en
                  </a>
                </div>
                <div
                  data-drupal-link-system-path="<front>"
                  className="fr is-active"
                >
                  <a
                    href="/fr"
                    className="language-link is-active"
                    data-drupal-link-system-path="<front>"
                  >
                    fr
                  </a>
                </div>{" "}
                <div data-drupal-link-system-path="<front>" className="nl">
                  <a
                    href="/en/benelux"
                    className="language-link"
                    data-drupal-link-system-path="<front>"
                  >
                    nl
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xs-1 col-sm-1 col-lg-1 block-header-top__search">
              <a
                className="block-header-top__btn-search"
                href=""
                onClick={handleToggleSearch}
              >
                <img
                  className="block-header-top__btn-search_picture-close"
                  src="http://localhost:3333/icons/research.svg"
                />
                <img
                  className="block-header-top__btn-search_picture-open"
                  src="http://localhost:3333/icons/search_white.svg"
                />
              </a>
            </div>
          </div>

          <div className="menu menu-external-link-container contact-header  ">
            <ul
              itemType="http://www.schema.org/SiteNavigationElement"
              className="level0 list-inline"
            >
              <li className="has-child">
                <a
                  href="https://blog.smile.eu/fr"
                  itemProp="url"
                  target="_blank"
                >
                  {" "}
                  <span itemProp="name" className="hvr-icon-grow">
                    Blog
                  </span>
                </a>

                <ul className="level1 list-inline">
                  <li>
                    <a
                      href="https://blog.smile.eu/fr"
                      itemProp="url"
                      target="_blank"
                    >
                      {" "}
                      <span itemProp="name" className="hvr-icon-grow">
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
                      {" "}
                      <span itemProp="name" className="hvr-icon-grow">
                        Technical blog
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://jobs.smile.eu" target="_blank">
                  {" "}
                  <span className="hvr-icon-grow btn btn-orange">
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
                  {" "}
                  <span itemProp="name" className="hvr-icon-grow btn btn-bleu">
                    Contact
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div
            id="block-smileeusearchblock"
            className={classNames(
              "block block-smileeu-search block-smileeu-search-block clearfix search-bar-block",
              { open: searchOpen },
            )}
          >
            <form
              className="smileeu-search-block-form"
              data-drupal-selector="smileeu-search-block-form"
              action="/fr/search_results"
              method="get"
              id="smileeu-search-block-form"
              acceptCharset="UTF-8"
              data-hs-cf-bound="true"
            >
              <div className="form-item js-form-item form-type-search js-form-type-search form-item-search-api-fulltext js-form-item-search-api-fulltext form-no-label form-group">
                <label
                  htmlFor="edit-search-api-fulltext"
                  className="control-label sr-only"
                >
                  Mots-clés, technologies, etc.
                </label>
                <DynamicSearch />
              </div>
              <div
                data-drupal-selector="edit-actions"
                className="form-actions form-group js-form-wrapper form-wrapper"
                id="edit-actions"
              >
                <div className="col-lg-2 col-sm-4 centre">
                  <button
                    data-twig-suggestion="search_smileeu_block"
                    data-drupal-selector="edit-submit"
                    className="button js-form-submit form-submit btn"
                    type="submit"
                    id="edit-submit"
                    value="Je recherche"
                    name=""
                  >
                    Je recherche{" "}
                  </button>
                </div>
              </div>
            </form>

            <a
              className="close-search-bar-btn"
              href=""
              onClick={handleToggleSearch}
            >
              <img src="http://localhost:3333/icons/close_search.png" alt="" />
            </a>
          </div>
        </div>

        <div className="region region-header container-fluid homepage">
          <div
            id="block-menusblock"
            className={classNames(
              "block block-smileeu-common block-smileeu-common-menus-block clearfix menu-header-homepage sticky-hp affix-top",
              { opened: menuChildrenOpen !== undefined },
            )}
          >
            <div className="menu-part-left">
              <div className="menu menu-main menu-footer">
                <ul
                  itemType="http://www.schema.org/SiteNavigationElement"
                  className="level0 list-inline"
                >
                  <li
                    className="has-child"
                    onClick={(e) => handleToggleMenuChildren(e, 0)}
                  >
                    <a
                      href="/fr"
                      data-drupal-link-system-path="<front>"
                      className={classNames("is-active", {
                        opened: menuChildrenOpen === 0,
                      })}
                    >
                      {" "}
                      <span className="hvr-icon-grow">Groupe</span>
                    </a>

                    <ul
                      className={classNames("level1 list-inline", {
                        opened: menuChildrenOpen === 0,
                      })}
                    >
                      <li>
                        <a
                          href="/fr/groupe/qui-sommes-nous"
                          data-drupal-link-system-path="node/174"
                        >
                          {" "}
                          <span className="hvr-icon-grow">
                            Qui sommes-nous ?
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fr/groupe/lopen-source-quest-ce-que-cest"
                          data-drupal-link-system-path="node/1718"
                        >
                          {" "}
                          <span className="hvr-icon-grow">
                            L&apos;Open source
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fr/groupe/nos-valeurs"
                          data-drupal-link-system-path="node/137"
                        >
                          {" "}
                          <span className="hvr-icon-grow">Nos valeurs</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fr/groupe/implantations"
                          data-drupal-link-system-path="node/88"
                        >
                          {" "}
                          <span className="hvr-icon-grow">
                            Nos implantations
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fr/groupe/actualites"
                          data-drupal-link-system-path="node/89"
                        >
                          {" "}
                          <span className="hvr-icon-grow">Actualités</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fr/groupe/liste-devenements"
                          itemProp="url"
                          data-drupal-link-system-path="node/52"
                        >
                          {" "}
                          <span itemProp="name" className="hvr-icon-grow">
                            Evènements
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fr/groupe/media"
                          data-drupal-link-system-path="node/124"
                        >
                          {" "}
                          <span className="hvr-icon-grow">Médias</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="has-child"
                    onClick={(e) => handleToggleMenuChildren(e, 1)}
                  >
                    <a
                      href="/fr"
                      data-drupal-link-system-path="<front>"
                      className={classNames("is-active", {
                        opened: menuChildrenOpen === 1,
                      })}
                    >
                      {" "}
                      <span className="hvr-icon-grow">Offres</span>
                    </a>

                    <ul
                      className={classNames("level1 list-inline", {
                        opened: menuChildrenOpen === 1,
                      })}
                    >
                      <li className="has-child">
                        <a
                          href="/fr/offres/digital"
                          itemProp="url"
                          data-drupal-link-system-path="node/148"
                        >
                          {" "}
                          <span itemProp="name" className="hvr-icon-grow">
                            Digital
                          </span>
                        </a>

                        <ul className="level2 list-inline">
                          <li>
                            <a
                              href="/fr/offers/digital/e-commerce-starter-kit"
                              itemProp="url"
                              data-drupal-link-system-path="node/2112"
                            >
                              {" "}
                              <span itemProp="name" className="hvr-icon-grow">
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
                          {" "}
                          <span className="hvr-icon-grow">Business Apps</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fr/offres/embarque-iot"
                          data-drupal-link-system-path="node/168"
                        >
                          {" "}
                          <span className="hvr-icon-grow">
                            Embedded &amp; IoT
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="/fr/offres/infrastructure"
                          data-drupal-link-system-path="node/171"
                        >
                          {" "}
                          <span className="hvr-icon-grow">Infrastructure</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      href="/fr/nos-references"
                      data-drupal-link-system-path="node/28"
                    >
                      {" "}
                      <span className="hvr-icon-grow">Références</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/technologies"
                      data-drupal-link-system-path="list-technologies"
                    >
                      {" "}
                      <span className="hvr-icon-grow">Technologies</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/fr/publications/liste-livres-blancs"
                      itemProp="url"
                      data-drupal-link-system-path="list-white-papers"
                    >
                      {" "}
                      <span itemProp="name" className="hvr-icon-grow">
                        Livres blancs
                      </span>
                    </a>
                  </li>
                  <li
                    className="has-child"
                    onClick={(e) => handleToggleMenuChildren(e, 2)}
                  >
                    <a
                      href="/fr/innovation"
                      itemProp="url"
                      data-drupal-link-system-path="node/157"
                      className={classNames("is-active", {
                        opened: menuChildrenOpen === 2,
                      })}
                    >
                      {" "}
                      <span itemProp="name" className="hvr-icon-grow">
                        Innovation
                      </span>
                    </a>

                    <ul
                      className={classNames("level1 list-inline", {
                        opened: menuChildrenOpen === 2,
                      })}
                    >
                      <li>
                        <a
                          href="https://www.smile.eu/fr/innovation/recherche-developpement"
                          itemProp="url"
                          target="_blank"
                        >
                          {" "}
                          <span itemProp="name" className="hvr-icon-grow">
                            Recherche et développement{" "}
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
                      {" "}
                      <span itemProp="name" className="hvr-icon-grow">
                        Conseil
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div
                className="col-xs-4 col-sm-6 col-lg-8 block-header-top__logo logo-header"
                style={{ display: "none" }}
              >
                <a
                  className="block-header-top__front-logo"
                  href="/fr"
                  title="Accueil"
                  rel="home"
                >
                  <img
                    className="block-header-top__site-logo-close"
                    src="http://localhost:3333/icons/bg_smile_uk_btn.png"
                    alt="SMILE Open Source"
                  />
                </a>
              </div>
            </div>
            <div className="col-xs-1 col-sm-1 col-lg-1 block-header-top__search search_head">
              <a
                className="block-header-top__btn-search"
                href=""
                onClick={handleToggleSearch}
              >
                <img
                  className="block-header-top__btn-search_picture-close"
                  src="http://localhost:3333/icons/research.svg"
                />
              </a>
            </div>
            <div className="menu-part-right">
              <div className="menu menu-external-link-container contact-header  ">
                <ul
                  itemType="http://www.schema.org/SiteNavigationElement"
                  className="level0 list-inline"
                >
                  <li className="has-child">
                    <a
                      href="https://blog.smile.eu/fr"
                      itemProp="url"
                      target="_blank"
                    >
                      {" "}
                      <span itemProp="name" className="hvr-icon-grow">
                        Blog
                      </span>
                    </a>

                    <ul className="level1 list-inline">
                      <li>
                        <a
                          href="https://blog.smile.eu/fr"
                          itemProp="url"
                          target="_blank"
                        >
                          {" "}
                          <span itemProp="name" className="hvr-icon-grow">
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
                          {" "}
                          <span itemProp="name" className="hvr-icon-grow">
                            Technical blog
                          </span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="http://jobs.smile.eu" target="_blank">
                      {" "}
                      <span className="hvr-icon-grow btn btn-orange">
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
                      {" "}
                      <span
                        itemProp="name"
                        className="hvr-icon-grow btn btn-bleu"
                      >
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="block-switcher-language">
                <div data-drupal-link-system-path="<front>" className="en">
                  <a
                    href="/en"
                    className="language-link"
                    data-drupal-link-system-path="<front>"
                  >
                    en
                  </a>
                </div>
                <div
                  data-drupal-link-system-path="<front>"
                  className="fr is-active"
                >
                  <a
                    href="/fr"
                    className="language-link is-active"
                    ata-drupal-link-system-path="<front>"
                  >
                    fr
                  </a>
                </div>{" "}
                <div data-drupal-link-system-path="<front>" className="nl">
                  <a
                    href="/en/benelux"
                    className="language-link"
                    data-drupal-link-system-path="<front>"
                  >
                    nl
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            id="block-menusblock"
            className="block block-smileeu-common block-smileeu-common-menus-block clearfix menu-header"
          >
            <div
              className={classNames("menu-container", { opened: menuOpen })}
              style={
                menuOpen
                  ? { display: "block", maxHeight: height, height }
                  : undefined
              }
            >
              <div className="menu-wrapper">
                <div className="menu menu-main menu-footer">
                  <ul
                    itemType="http://www.schema.org/SiteNavigationElement"
                    className="level0 list-inline"
                  >
                    <li
                      className={classNames("has-child", {
                        opened: menuChildrenOpen === 0,
                      })}
                      onClick={(e) => handleToggleMenuChildren(e, 0)}
                    >
                      <a
                        href="/fr"
                        data-drupal-link-system-path="<front>"
                        className="is-active"
                      >
                        {" "}
                        <span className="hvr-icon-grow">Groupe</span>
                      </a>

                      <ul
                        className="level1 list-inline"
                        style={{
                          display: menuChildrenOpen === 0 ? "block" : "none",
                        }}
                      >
                        <li>
                          <a
                            href="/fr/groupe/qui-sommes-nous"
                            data-drupal-link-system-path="node/174"
                          >
                            {" "}
                            <span className="hvr-icon-grow">
                              Qui sommes-nous ?
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fr/groupe/lopen-source-quest-ce-que-cest"
                            data-drupal-link-system-path="node/1718"
                          >
                            {" "}
                            <span className="hvr-icon-grow">
                              L&apos;Open source
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fr/groupe/nos-valeurs"
                            data-drupal-link-system-path="node/137"
                          >
                            {" "}
                            <span className="hvr-icon-grow">Nos valeurs</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fr/groupe/implantations"
                            data-drupal-link-system-path="node/88"
                          >
                            {" "}
                            <span className="hvr-icon-grow">
                              Nos implantations
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fr/groupe/actualites"
                            data-drupal-link-system-path="node/89"
                          >
                            {" "}
                            <span className="hvr-icon-grow">Actualités</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fr/groupe/liste-devenements"
                            itemProp="url"
                            data-drupal-link-system-path="node/52"
                          >
                            {" "}
                            <span itemProp="name" className="hvr-icon-grow">
                              Evènements
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fr/groupe/media"
                            data-drupal-link-system-path="node/124"
                          >
                            {" "}
                            <span className="hvr-icon-grow">Médias</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={classNames("has-child", {
                        opened: menuChildrenOpen === 1,
                      })}
                      onClick={(e) => handleToggleMenuChildren(e, 1)}
                    >
                      <a
                        href="/fr"
                        data-drupal-link-system-path="<front>"
                        className="is-active"
                      >
                        {" "}
                        <span className="hvr-icon-grow">Offres</span>
                      </a>

                      <ul
                        className="level1 list-inline"
                        style={{
                          display: menuChildrenOpen === 1 ? "block" : "none",
                        }}
                      >
                        <li className="has-child">
                          <a
                            href="/fr/offres/digital"
                            itemProp="url"
                            data-drupal-link-system-path="node/148"
                          >
                            {" "}
                            <span itemProp="name" className="hvr-icon-grow">
                              Digital
                            </span>
                          </a>

                          <ul className="level2 list-inline">
                            <li>
                              <a
                                href="/fr/offers/digital/e-commerce-starter-kit"
                                itemProp="url"
                                data-drupal-link-system-path="node/2112"
                              >
                                {" "}
                                <span itemProp="name" className="hvr-icon-grow">
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
                            {" "}
                            <span className="hvr-icon-grow">Business Apps</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fr/offres/embarque-iot"
                            data-drupal-link-system-path="node/168"
                          >
                            {" "}
                            <span className="hvr-icon-grow">
                              Embedded &amp; IoT
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="/fr/offres/infrastructure"
                            data-drupal-link-system-path="node/171"
                          >
                            {" "}
                            <span className="hvr-icon-grow">
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
                        {" "}
                        <span className="hvr-icon-grow">Références</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/technologies"
                        data-drupal-link-system-path="list-technologies"
                      >
                        {" "}
                        <span className="hvr-icon-grow">Technologies</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/fr/publications/liste-livres-blancs"
                        itemProp="url"
                        data-drupal-link-system-path="list-white-papers"
                      >
                        {" "}
                        <span itemProp="name" className="hvr-icon-grow">
                          Livres blancs
                        </span>
                      </a>
                    </li>
                    <li
                      className={classNames("has-child", {
                        opened: menuChildrenOpen === 2,
                      })}
                      onClick={(e) => handleToggleMenuChildren(e, 2)}
                    >
                      <a
                        href="/fr/innovation"
                        itemProp="url"
                        data-drupal-link-system-path="node/157"
                      >
                        {" "}
                        <span itemProp="name" className="hvr-icon-grow">
                          Innovation
                        </span>
                      </a>

                      <ul
                        className="level1 list-inline"
                        style={{
                          display: menuChildrenOpen === 2 ? "block" : "none",
                        }}
                      >
                        <li>
                          <a
                            href="https://www.smile.eu/fr/innovation/recherche-developpement"
                            itemProp="url"
                            target="_blank"
                          >
                            {" "}
                            <span itemProp="name" className="hvr-icon-grow">
                              Recherche et développement{" "}
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
                        {" "}
                        <span itemProp="name" className="hvr-icon-grow">
                          Conseil
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="menu menu-external-link-container contact-header  ">
                  <ul
                    itemType="http://www.schema.org/SiteNavigationElement"
                    className="level0 list-inline"
                  >
                    <li
                      className={classNames("has-child", {
                        opened: menuChildrenOpen === 3,
                      })}
                      onClick={(e) => handleToggleMenuChildren(e, 3)}
                    >
                      <a
                        href="https://blog.smile.eu/fr"
                        itemProp="url"
                        target="_blank"
                      >
                        {" "}
                        <span itemProp="name" className="hvr-icon-grow">
                          Blog
                        </span>
                      </a>

                      <ul
                        className="level1 list-inline"
                        style={{
                          display: menuChildrenOpen === 3 ? "block" : "none",
                        }}
                      >
                        <li>
                          <a
                            href="https://blog.smile.eu/fr"
                            itemProp="url"
                            target="_blank"
                          >
                            {" "}
                            <span itemProp="name" className="hvr-icon-grow">
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
                            {" "}
                            <span itemProp="name" className="hvr-icon-grow">
                              Technical blog
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="http://jobs.smile.eu" target="_blank">
                        {" "}
                        <span className="hvr-icon-grow btn btn-orange">
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
                        {" "}
                        <span
                          itemProp="name"
                          className="hvr-icon-grow btn btn-bleu"
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
    </header>
  );
}
