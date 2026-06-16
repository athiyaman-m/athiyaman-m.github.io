(function () {
  const icons = {
    "bi-linkedin": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5V19H3.8V8.5h3.14zM5.37 3A1.82 1.82 0 1 1 5.33 6.64 1.82 1.82 0 0 1 5.37 3zM20.2 12.37V19h-3.13v-6.04c0-1.52-.55-2.56-1.9-2.56-1.04 0-1.67.7-1.95 1.38-.1.24-.13.58-.13.92V19H9.97s.04-9.64 0-10.5h3.12v1.49l-.02.03h.02v-.03c.42-.65 1.18-1.57 2.88-1.57 2.1 0 3.68 1.37 3.68 4.32z"/></svg>',
    "bi-envelope": '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.217l-8 4.8-8-4.8V4Zm0 1.383V12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.383l-7.486 4.492a1 1 0 0 1-1.028 0L0 5.383Z"/></svg>',
    "bi-github": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.75A9.25 9.25 0 0 0 9.07 20.8c.46.08.63-.2.63-.45l-.01-1.57c-2.55.56-3.09-1.09-3.09-1.09-.42-1.06-1.01-1.34-1.01-1.34-.83-.57.06-.56.06-.56.92.06 1.4.94 1.4.94.81 1.39 2.12.99 2.64.76.08-.59.32-.99.58-1.22-2.04-.23-4.18-1.02-4.18-4.54 0-1 .36-1.82.94-2.46-.1-.23-.41-1.16.09-2.42 0 0 .77-.25 2.53.94A8.8 8.8 0 0 1 12 7.4c.79 0 1.58.11 2.31.33 1.76-1.19 2.53-.94 2.53-.94.5 1.26.19 2.19.09 2.42.58.64.94 1.46.94 2.46 0 3.53-2.14 4.31-4.19 4.54.33.28.62.82.62 1.66v2.46c0 .25.17.54.64.45A9.25 9.25 0 0 0 12 2.75z"/></svg>',
    "bi-book": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 1.5 8.4 12 13.8l8.4-4.32V15H22.5V8.4L12 3zm-6.3 9.54V16.5c0 1.9 3.34 3.45 6.3 3.45s6.3-1.55 6.3-3.45v-3.96L12 16.02l-6.3-3.48z"/></svg>',
    "bi-layer-forward": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.75 2.75 7.5 12 12.25 21.25 7.5 12 2.75zm0 11.17L4.7 10.17l-1.95 1 9.25 4.75 9.25-4.75-1.95-1L12 13.92zm0 3.67-7.3-3.75-1.95 1L12 19.59l9.25-4.75-1.95-1-7.3 3.75z"/></svg>',
    "bi-controller": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8h10a4 4 0 0 1 3.9 4.9l-.7 3a3 3 0 0 1-2.9 2.3c-.9 0-1.8-.4-2.4-1.1l-1.2-1.3h-3.4l-1.2 1.3c-.6.7-1.5 1.1-2.4 1.1a3 3 0 0 1-2.9-2.3l-.7-3A4 4 0 0 1 7 8Zm0 2a2 2 0 0 0-2 2.5l.7 3c.1.4.5.7.9.7.3 0 .6-.1.8-.3l1.8-1.9h5l1.8 1.9c.2.2.5.3.8.3.4 0 .8-.3.9-.7l.7-3A2 2 0 0 0 17 10H7Zm1.5 1.5h1.2v1.2h1.2v1.2H9.7v1.2H8.5v-1.2H7.3v-1.2h1.2v-1.2Zm7 1.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm2.6-1.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg>',
    "bi-plugin": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h2v5h4V3h2v5h1a3 3 0 0 1 3 3v1h-5v4a6 6 0 0 1-5 5.91V23H8v-2.09A6 6 0 0 1 3 16v-4H0v-1a3 3 0 0 1 3-3h1V3h2v5h2V3Zm5 9H5v4a4 4 0 0 0 8 0v-4Z"/></svg>',
    "bi-c-circle": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Zm0 1.8a7.45 7.45 0 1 1 0 14.9 7.45 7.45 0 0 1 0-14.9Zm2.7 5.2-.6 1.4c-.5-.3-1-.4-1.5-.4-1.4 0-2.4 1-2.4 2.4 0 1.5 1 2.4 2.4 2.4.6 0 1.1-.1 1.6-.4l.5 1.4c-.6.4-1.4.6-2.3.6-2.4 0-4-1.6-4-4 0-2.3 1.7-4 4-4 .8 0 1.6.2 2.3.6Z"/></svg>',
    "bi-download": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a1 1 0 0 1 1 1v8.17l2.59-2.58L17 11l-5 5-5-5 1.41-1.41L11 12.17V4a1 1 0 0 1 1-1Zm-7 14h14v2H5v-2Z"/></svg>',
    "bi-house": '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/></svg>',
    "bi-mortarboard": '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z"/><path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z"/></svg>',
    "bi-briefcase": '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/></svg>',
    "bi-file-earmark-text": '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg>',
    "bi-code-slash": '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/></svg>',
    "bi-newspaper": '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .618-.262.75-.532.17-.345.25-.703.25-.94V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.225.5.497.5H12z"/><path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v2H2v-2zm0 3h9v1H2v-1zm5-4h4v.5a.5.5 0 0 1-.5.5H7.5a.5.5 0 0 1-.5-.5V9zm5-3h.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H12V6z"/></svg>',
    "bi-pencil": '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg>',

  };

  const navLinks = [
    { slug: "home", label: "Home", href: "index.html", icon: "bi-house" },
    { slug: "experience", label: "Experience", href: "experience.html", icon: "bi-briefcase" },
    { slug: "education", label: "Education", href: "education.html", icon: "bi-mortarboard" },
    { slug: "projects", label: "Projects", href: "projects.html", icon: "bi-code-slash" },
    { slug: "publications", label: "Publications", href: "publications.html", icon: "bi-file-earmark-text" },
    { slug: "blogs", label: "Blogs", href: "blogs.html", icon: "bi-pencil" },
    { slug: "news", label: "News", href: "news.html", icon: "bi-newspaper" }
  ];

  const actionLinks = [
    { label: "Email", href: "mailto:athiyamanpro@gmail.com", icon: "bi-envelope", iconOnly: true, className: "site-action-icon" },
    { label: "Resume", href: "documents/Resume-Athiyaman.pdf", className: "site-button" }
  ];

  function pathFromRoot(root, href) {
    if (!href) {
      return href;
    }

    // Do not rewrite protocol/absolute/hash links (mailto:, https:, /path, #id, etc.)
    if (/^(?:[a-zA-Z][a-zA-Z\d+\-.]*:|\/\/|\/|#)/.test(href)) {
      return href;
    }

    return root ? root + href : href;
  }

  function renderHeader() {
    const root = document.body.dataset.root || "";
    const currentPage = document.body.dataset.page || "";
    const nav = navLinks
      .map((link) => {
        const activeClass = link.slug === currentPage ? "is-active" : "";
        return '<li><a class="' + activeClass + '" href="' + pathFromRoot(root, link.href) + '">' + link.label + "</a></li>";
      })
      .join("");
    const actions = actionLinks
      .map((link) => {
        const classList = [];
        if (link.className) {
          classList.push(link.className);
        }
        const icon = link.icon ? '<i class="bi ' + link.icon + '" aria-hidden="true"></i>' : "";
        const text = link.iconOnly ? "" : "<span>" + link.label + "</span>";
        const aria = link.iconOnly ? ' aria-label="' + link.label + '" title="' + link.label + '"' : "";
        return '<li><a class="' + classList.join(" ") + '" href="' + pathFromRoot(root, link.href) + '"' + aria + ">" + icon + text + "</a></li>";
      })
      .join("");

    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML =
      '<div class="site-header__inner">' +
      '<a class="site-brand" href="' + pathFromRoot(root, "index.html") + '" aria-label="Home" title="Home"><i class="bi bi-house"></i></a>' +
      '<button class="site-header__toggle" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Toggle navigation"><span></span></button>' +
      '<nav class="site-header__nav" id="site-navigation">' +
      '<ul class="site-header__links">' + nav + "</ul>" +
      '<ul class="site-header__actions">' + actions + "</ul>" +
      "</nav>" +
      "</div>";

    document.body.insertBefore(header, document.body.firstChild);

    const toggle = header.querySelector(".site-header__toggle");
    toggle.addEventListener("click", function () {
      const isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    header.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function renderFooter() {
    const root = document.body.dataset.root || "";
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="site-footer__inner">' +
      "<span>© Athiyaman M. All rights reserved.</span>" +
      '<span><a href="' + pathFromRoot(root, "documents/Resume-Athiyaman.pdf") + '">Resume</a> · <a href="https://scholar.google.com/citations?hl=en&user=QfHBWvgAAAAJ">Google Scholar</a></span>' +
      "</div>";
    document.body.appendChild(footer);
  }

  function renderMobileBottomNav() {
    const root = document.body.dataset.root || "";
    const currentPage = document.body.dataset.page || "";

    const nav = document.createElement("nav");
    nav.className = "site-bottom-nav";
    nav.setAttribute("aria-label", "Mobile navigation");

    const inner = document.createElement("div");
    inner.className = "site-bottom-nav__inner";

    navLinks.forEach(function (link) {
      const activeClass = link.slug === currentPage ? "is-active" : "";
      const a = document.createElement("a");
      a.className = "site-bottom-nav__link " + activeClass;
      a.href = pathFromRoot(root, link.href);
      a.innerHTML = '<i class="bi ' + link.icon + '"></i><span class="site-bottom-nav__label">' + link.label + '</span>';
      inner.appendChild(a);
    });

    nav.appendChild(inner);
    document.body.appendChild(nav);
  }


  function renderIcons() {
    document.querySelectorAll("i.bi").forEach(function (iconNode) {
      const className = Array.from(iconNode.classList).find(function (name) {
        return name.indexOf("bi-") === 0;
      });
      if (!className || !icons[className]) {
        return;
      }
      iconNode.classList.add("site-icon");
      iconNode.innerHTML = icons[className];
      iconNode.removeAttribute("role");
    });
  }

  function initCopyButtons() {
    document.querySelectorAll(".code-copy-button").forEach(function (button) {
      if (!button.textContent.trim()) {
        button.textContent = "Copy";
      }

      button.addEventListener("click", function () {
        const codeBlock = button.previousElementSibling || button.parentElement.querySelector("code");
        if (!codeBlock || !navigator.clipboard) {
          return;
        }

        navigator.clipboard.writeText(codeBlock.innerText).then(function () {
          button.textContent = "Copied";
          button.dataset.copied = "true";
          window.setTimeout(function () {
            button.textContent = "Copy";
            delete button.dataset.copied;
          }, 1400);
        });
      });
    });
  }

  function showToast(message) {
    let toast = document.querySelector(".site-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "site-toast";
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-live", "polite");
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("is-visible");

    if (toast._hideTimer) {
      clearTimeout(toast._hideTimer);
    }
    toast._hideTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 1800);
  }

  function showNavbarEmailStatus(link, message, isError) {
    const actionList = link.closest(".site-header__actions");
    const actionItem = link.closest("li");
    if (!actionList || !actionItem) {
      showToast(message);
      return;
    }

    actionItem.classList.add("site-email-action");
    let status = actionItem.querySelector(".site-email-copy-status");
    if (!status) {
      status = document.createElement("span");
      status.className = "site-email-copy-status";
      actionItem.insertBefore(status, link);
    }

    status.textContent = message;
    status.classList.toggle("is-error", Boolean(isError));
    status.classList.add("is-visible");

    if (status._hideTimer) {
      clearTimeout(status._hideTimer);
    }
    status._hideTimer = setTimeout(function () {
      status.classList.remove("is-visible");
    }, 1800);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {
      try {
        const helper = document.createElement("textarea");
        helper.value = text;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(helper);
        if (ok) {
          resolve();
        } else {
          reject(new Error("Copy failed"));
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  function initEmailCopy() {
    const mailLinks = Array.from(document.querySelectorAll('a[href^="mailto:"]'));
    if (mailLinks.length === 0) {
      return;
    }

    mailLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href") || "";
        const email = decodeURIComponent(href.replace(/^mailto:/i, "").split("?")[0]).trim();
        if (!email) {
          return;
        }

        event.preventDefault();
        const inNavBar = Boolean(link.closest(".site-header__actions"));
        copyText(email)
          .then(function () {
            if (inNavBar) {
              showNavbarEmailStatus(link, "Email Copied to Clipboard");
            } else {
              showToast("Email Copied to Clipboard");
            }
          })
          .catch(function () {
            if (inNavBar) {
              showNavbarEmailStatus(link, "Unable to copy email-id", true);
            } else {
              showToast("Unable to copy email-id");
            }
          });
      });
    });
  }

  function initProjectDetailActionLinks() {
    if (document.body.dataset.page !== "projects" || document.body.dataset.kind !== "detail") {
      return;
    }

    document.querySelectorAll("#quarto-document-content a i.bi").forEach(function (iconNode) {
      iconNode.remove();
    });

    document.querySelectorAll("#quarto-document-content p").forEach(function (paragraph) {
      const actionLinks = Array.from(paragraph.querySelectorAll("a")).filter(function (link) {
        return Boolean(link.querySelector(".about-link-text"));
      });
      if (actionLinks.length < 2) {
        return;
      }

      paragraph.classList.add("project-action-links");

      Array.from(paragraph.childNodes).forEach(function (node) {
        if (node.nodeType !== Node.TEXT_NODE || !node.textContent) {
          return;
        }
        const stripped = node.textContent.replace(/\u2003/g, "").trim();
        if (stripped === "") {
          node.textContent = "";
        }
      });
    });
  }

  function slugifyHeading(text) {
    return (text || "")
      .toLowerCase()
      .trim()
      .replace(/[`~!@#$%^&*()+=[\]{}|\\;:'",.<>/?]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "section";
  }

  function ensureHeadingId(heading, usedIds) {
    const existingId = heading.getAttribute("id");
    if (existingId) {
      usedIds.add(existingId);
      return existingId;
    }

    const section = heading.closest("section[id]");
    if (section) {
      const sectionId = section.getAttribute("id");
      if (sectionId) {
        return sectionId;
      }
    }

    let id = heading.getAttribute("data-anchor-id");
    if (!id) {
      id = slugifyHeading(heading.textContent);
    }

    let uniqueId = id;
    let suffix = 2;
    while (usedIds.has(uniqueId)) {
      uniqueId = id + "-" + suffix;
      suffix += 1;
    }
    usedIds.add(uniqueId);
    heading.setAttribute("id", uniqueId);
    return uniqueId;
  }

  function initProjectDetailToc() {
    if (document.body.dataset.page !== "projects" || document.body.dataset.kind !== "detail") {
      return;
    }

    const content = document.querySelector("#quarto-document-content");
    if (!content) {
      return;
    }

    const headingNodes = Array.from(content.querySelectorAll("h2, h3, h4, h5")).filter(function (heading) {
      return !heading.closest("#TOC");
    });
    if (headingNodes.length === 0) {
      return;
    }

    const usedIds = new Set(
      Array.from(content.querySelectorAll("[id]"))
        .map(function (node) {
          return node.id;
        })
        .filter(Boolean)
    );

    const headings = [];
    headingNodes.forEach(function (heading) {
      const text = heading.textContent.replace(/\s+/g, " ").trim();
      if (!text) {
        return;
      }
      const level = Number(heading.tagName.slice(1));
      if (Number.isNaN(level)) {
        return;
      }
      const id = ensureHeadingId(heading, usedIds);
      headings.push({ id: id, text: text, level: level });
    });

    if (headings.length === 0) {
      return;
    }

    let sidebar = document.querySelector("#quarto-margin-sidebar");
    const contentWrap = document.querySelector("#quarto-content");
    if (!sidebar && contentWrap) {
      sidebar = document.createElement("div");
      sidebar.id = "quarto-margin-sidebar";
      sidebar.className = "sidebar margin-sidebar";
      const main = contentWrap.querySelector("main.content");
      if (main) {
        contentWrap.insertBefore(sidebar, main);
      } else {
        contentWrap.prepend(sidebar);
      }
    }
    if (!sidebar) {
      return;
    }

    const nav = document.createElement("nav");
    nav.id = "TOC";
    nav.className = "toc-active";
    nav.setAttribute("role", "doc-toc");

    const title = document.createElement("h2");
    title.id = "toc-title";
    title.textContent = "On this page";
    nav.appendChild(title);

    const rootList = document.createElement("ul");
    const minLevel = headings.reduce(function (min, item) {
      return item.level < min ? item.level : min;
    }, headings[0].level);

    let currentLevel = minLevel;
    const listStack = [rootList];

    headings.forEach(function (item, index) {
      let targetLevel = item.level;
      if (targetLevel < minLevel) {
        targetLevel = minLevel;
      }
      if (targetLevel > currentLevel + 1) {
        targetLevel = currentLevel + 1;
      }

      while (targetLevel > currentLevel) {
        const parentList = listStack[listStack.length - 1];
        let parentItem = parentList.lastElementChild;
        if (!parentItem) {
          parentItem = document.createElement("li");
          parentList.appendChild(parentItem);
        }
        const nestedList = document.createElement("ul");
        parentItem.appendChild(nestedList);
        listStack.push(nestedList);
        currentLevel += 1;
      }

      while (targetLevel < currentLevel) {
        listStack.pop();
        currentLevel -= 1;
      }

      const listItem = document.createElement("li");
      const link = document.createElement("a");
      link.className = "nav-link";
      if (index === 0) {
        link.classList.add("is-active");
      }
      link.href = "#" + item.id;
      link.setAttribute("data-scroll-target", "#" + item.id);
      link.textContent = item.text;
      listItem.appendChild(link);
      listStack[listStack.length - 1].appendChild(listItem);
    });

    nav.appendChild(rootList);
    sidebar.innerHTML = "";
    sidebar.appendChild(nav);
  }

  function normalizeCategory(rawValue) {
    return (rawValue || "").trim().toLowerCase();
  }

  function inferYear(card) {
    const rawSort = card.dataset.listingDateSort || card.getAttribute("data-listing-date-sort") || "";
    const sortValue = Number(rawSort);
    if (!Number.isNaN(sortValue) && sortValue > 0) {
      return new Date(sortValue).getFullYear();
    }

    const dateText = card.querySelector(".listing-date");
    if (!dateText) {
      return "Unknown";
    }

    const yearMatch = dateText.textContent.match(/\b(19|20)\d{2}\b/);
    return yearMatch ? yearMatch[0] : "Unknown";
  }

  function sortYearsDesc(keys) {
    return keys.sort(function (a, b) {
      const numA = Number(a);
      const numB = Number(b);
      const aIsNum = !Number.isNaN(numA);
      const bIsNum = !Number.isNaN(numB);
      if (aIsNum && bIsNum) {
        return numB - numA;
      }
      if (aIsNum) {
        return -1;
      }
      if (bIsNum) {
        return 1;
      }
      return String(b).localeCompare(String(a));
    });
  }

  function formatOwnAuthorName(text) {
    const ownName = "Athiyaman M";
    const value = typeof text === "string" ? text : "";
    if (!value || value.indexOf(ownName) === -1) {
      return null;
    }

    const fragment = document.createDocumentFragment();
    const parts = value.split(ownName);
    parts.forEach(function (part, index) {
      if (part) {
        fragment.appendChild(document.createTextNode(part));
      }
      if (index < parts.length - 1) {
        const marker = document.createElement("span");
        marker.className = "author-self";
        marker.textContent = ownName;
        fragment.appendChild(marker);
      }
    });
    return fragment;
  }

  function initPublicationsAccordion() {
    if (document.body.dataset.page !== "publications") {
      return;
    }

    const listing = document.querySelector("#listing-listing");
    const list = listing ? listing.querySelector(".list") : null;
    const cards = list ? Array.from(list.querySelectorAll(".quarto-post")) : [];
    if (!listing || cards.length === 0) {
      return;
    }

    const grouped = new Map();

    cards.forEach(function (card) {
      const year = String(inferYear(card));
      const bodyLink = card.querySelector(".body > a") || card.querySelector("a[href]");

      const titleNode = card.querySelector(".listing-title");
      const dateNode = card.querySelector(".listing-date");
      const authorNode = card.querySelector(".listing-author");
      const venueNode = card.querySelector(".listing-journal_name");

      const item = {
        href: bodyLink ? (bodyLink.getAttribute("href") || "#") : "#",
        title: titleNode ? titleNode.textContent.trim() : "Untitled",
        date: dateNode ? dateNode.textContent.trim() : "",
        authors: authorNode ? authorNode.textContent.trim() : "",
        venue: venueNode ? venueNode.textContent.replace(/\s+/g, " ").trim() : ""
      };

      if (!grouped.has(year)) {
        grouped.set(year, []);
      }
      grouped.get(year).push(item);
    });

    const years = sortYearsDesc(Array.from(grouped.keys()));

    const accordion = document.createElement("section");
    accordion.className = "pub-accordion";

    years.forEach(function (year) {
      const entries = grouped.get(year) || [];
      const details = document.createElement("details");
      details.className = "pub-year";
      details.open = true;

      const summary = document.createElement("summary");
      summary.className = "pub-year-summary";
      summary.innerHTML =
        '<span class="pub-year-label">' + year + "</span>" +
        '<span class="pub-year-count">' + entries.length + "</span>";
      details.appendChild(summary);

      const listWrap = document.createElement("div");
      listWrap.className = "pub-year-list";

      entries.forEach(function (entry) {
        const article = document.createElement("article");
        article.className = "pub-item";
        const isCopyrightEntry = /\/(picrypt|camerashot)\//i.test(entry.href);
        const isChapterEntry = /\/modifiedhho\//i.test(entry.href);

        const title = document.createElement("h3");
        title.className = "pub-item-title";
        const titleLink = document.createElement("a");
        titleLink.href = entry.href;
        titleLink.textContent = entry.title;
        title.appendChild(titleLink);

        const meta = document.createElement("div");
        meta.className = "pub-item-meta";
        if (entry.date) {
          const date = document.createElement("span");
          date.className = "pub-date";
          date.textContent = entry.date;
          meta.appendChild(date);
        }
        if (entry.venue) {
          if (isCopyrightEntry) {
            const label = document.createElement("span");
            label.className = "pub-tag-copyright";
            label.textContent = "Copyright";
            meta.appendChild(label);
          }
          if (isChapterEntry) {
            const label = document.createElement("span");
            label.className = "pub-tag-chapter";
            label.textContent = "Chapter";
            meta.appendChild(label);
          }
          const venue = document.createElement("span");
          venue.className = "pub-venue";
          venue.textContent = entry.venue;
          meta.appendChild(venue);
        }

        const authors = document.createElement("p");
        authors.className = "pub-authors";
        const authorMarkup = formatOwnAuthorName(entry.authors);
        if (authorMarkup) {
          authors.appendChild(authorMarkup);
        } else {
          authors.textContent = entry.authors;
        }

        article.appendChild(title);
        if (meta.childElementCount > 0) {
          article.appendChild(meta);
        }
        if (entry.authors) {
          article.appendChild(authors);
        }
        listWrap.appendChild(article);
      });

      details.appendChild(listWrap);
      accordion.appendChild(details);
    });

    listing.innerHTML = "";
    listing.appendChild(accordion);
  }

  function initProjectsAccordion() {
    if (document.body.dataset.page !== "projects") {
      return;
    }

    const listing = document.querySelector("#listing-listing");
    const list = listing ? listing.querySelector(".list") : null;
    const cards = list ? Array.from(list.querySelectorAll(".quarto-post")) : [];
    if (!listing || cards.length === 0) {
      return;
    }

    const grouped = new Map();

    cards.forEach(function (card) {
      const year = String(inferYear(card));
      const bodyLink = card.querySelector(".body > a") || card.querySelector("a[href]");

      const titleNode = card.querySelector(".listing-title");
      const dateNode = card.querySelector(".listing-date");
      const authorNode = card.querySelector(".listing-author");
      const descriptionNode = card.querySelector(".listing-description p, .listing-description");
      const imageNode = card.querySelector(".thumbnail img");
      const categoryNodes = Array.from(card.querySelectorAll(".listing-category"));

      const item = {
        href: bodyLink ? (bodyLink.getAttribute("href") || "#") : "#",
        title: titleNode ? titleNode.textContent.trim() : "Untitled",
        date: dateNode ? dateNode.textContent.trim() : "",
        author: authorNode ? authorNode.textContent.trim() : "",
        description: descriptionNode ? descriptionNode.textContent.trim() : "",
        imageSrc: imageNode ? imageNode.getAttribute("src") || "" : "",
        imageAlt: imageNode ? imageNode.getAttribute("alt") || "" : "",
        githubUrl: card.dataset.githubUrl || "",
        categories: categoryNodes.map(function (node) {
          return node.textContent.trim();
        }).filter(Boolean)
      };

      if (!grouped.has(year)) {
        grouped.set(year, []);
      }
      grouped.get(year).push(item);
    });

    const years = sortYearsDesc(Array.from(grouped.keys()));
    const accordion = document.createElement("section");
    accordion.className = "proj-accordion";

    years.forEach(function (year) {
      const entries = grouped.get(year) || [];
      const details = document.createElement("details");
      details.className = "proj-year";
      details.open = true;

      const summary = document.createElement("summary");
      summary.className = "proj-year-summary";
      summary.innerHTML =
        '<span class="proj-year-label">' + year + "</span>" +
        '<span class="proj-year-count">' + entries.length + "</span>";
      details.appendChild(summary);

      const listWrap = document.createElement("div");
      listWrap.className = "proj-year-list";

      entries.forEach(function (entry) {
        const article = document.createElement("article");
        article.className = "proj-item";

        // Only show thumbnail if image exists and is not the badge placeholder
        var hasImage = entry.imageSrc && entry.imageSrc.indexOf("badge-sd-fill") === -1;
        if (hasImage) {
          const thumb = document.createElement("div");
          thumb.className = "proj-item-thumb";
          const image = document.createElement("img");
          image.loading = "lazy";
          image.decoding = "async";
          image.src = entry.imageSrc;
          image.alt = entry.imageAlt || entry.title;
          image.onerror = function () {
            thumb.style.display = "none";
            article.classList.add("proj-item--no-thumb");
          };
          thumb.appendChild(image);
          article.appendChild(thumb);
        } else {
          article.classList.add("proj-item--no-thumb");
        }

        const content = document.createElement("div");
        content.className = "proj-item-content";

        const title = document.createElement("h3");
        title.className = "proj-item-title";
        const titleText = document.createElement("span");
        titleText.textContent = entry.title;
        title.appendChild(titleText);
        content.appendChild(title);

        const meta = document.createElement("div");
        meta.className = "proj-item-meta";
        if (entry.date) {
          const date = document.createElement("span");
          date.className = "proj-date";
          date.textContent = entry.date;
          meta.appendChild(date);
        }
        entry.categories.forEach(function (category) {
          const chip = document.createElement("span");
          chip.className = "proj-category";
          chip.textContent = category;
          meta.appendChild(chip);
        });
        if (meta.childElementCount > 0) {
          content.appendChild(meta);
        }

        if (entry.description) {
          const description = document.createElement("p");
          description.className = "proj-description";
          description.textContent = entry.description;
          content.appendChild(description);
        }

        // GitHub button
        if (entry.githubUrl) {
          const ghBtn = document.createElement("a");
          ghBtn.className = "proj-github-btn";
          ghBtn.href = entry.githubUrl;
          ghBtn.target = "_blank";
          ghBtn.rel = "noopener";
          ghBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2.75A9.25 9.25 0 0 0 9.07 20.8c.46.08.63-.2.63-.45l-.01-1.57c-2.55.56-3.09-1.09-3.09-1.09-.42-1.06-1.01-1.34-1.01-1.34-.83-.57.06-.56.06-.56.92.06 1.4.94 1.4.94.81 1.39 2.12.99 2.64.76.08-.59.32-.99.58-1.22-2.04-.23-4.18-1.02-4.18-4.54 0-1 .36-1.82.94-2.46-.1-.23-.41-1.16.09-2.42 0 0 .77-.25 2.53.94A8.8 8.8 0 0 1 12 7.4c.79 0 1.58.11 2.31.33 1.76-1.19 2.53-.94 2.53-.94.5 1.26.19 2.19.09 2.42.58.64.94 1.46.94 2.46 0 3.53-2.14 4.31-4.19 4.54.33.28.62.82.62 1.66v2.46c0 .25.17.54.64.45A9.25 9.25 0 0 0 12 2.75z"/></svg> View on GitHub';
          content.appendChild(ghBtn);
        }

        article.appendChild(content);
        listWrap.appendChild(article);
      });

      details.appendChild(listWrap);
      accordion.appendChild(details);
    });

    listing.innerHTML = "";
    listing.appendChild(accordion);
  }

  function initBlogsListing() {
    if (document.body.dataset.page !== "blogs") {
      return;
    }

    const listing = document.querySelector("#listing-listing");
    const list = listing ? listing.querySelector(".list") : null;
    const cards = list ? Array.from(list.querySelectorAll(".quarto-post")) : [];
    if (!listing || cards.length === 0) {
      return;
    }

    listing.querySelectorAll(".listing-controls").forEach(function (controls) {
      controls.remove();
    });

    cards.forEach(function (card) {
      const link = card.querySelector(".body > a");
      const title = link ? link.querySelector(".listing-title") : null;
      const dateNode = card.querySelector(".listing-date");
      const authorNode = card.querySelector(".listing-author");
      const subtitle = card.querySelector(".listing-subtitle");
      const metadata = card.querySelector(".metadata");
      const primaryHref = link
        ? link.getAttribute("href")
        : (card.querySelector("a[href]") ? card.querySelector("a[href]").getAttribute("href") : "");

      if (subtitle && !subtitle.textContent.trim()) {
        subtitle.remove();
      }

      if (link && title) {
        let meta = link.querySelector(".blog-inline-meta");
        if (!meta) {
          meta = document.createElement("div");
          meta.className = "blog-inline-meta";
          title.insertAdjacentElement("afterend", meta);
        }

        const authorText = authorNode ? authorNode.textContent.trim() : "";
        const dateText = dateNode ? dateNode.textContent.trim() : "";
        meta.innerHTML = "";

        if (authorText) {
          const author = document.createElement("span");
          author.className = "blog-meta-author";
          author.textContent = authorText;
          meta.appendChild(author);
        }

        if (authorText && dateText) {
          const separator = document.createElement("span");
          separator.className = "blog-meta-sep";
          separator.setAttribute("aria-hidden", "true");
          separator.textContent = "•";
          meta.appendChild(separator);
        }

        if (dateText) {
          const date = document.createElement("span");
          date.className = "blog-meta-date";
          date.textContent = dateText;
          meta.appendChild(date);
        }

        if (meta.childElementCount === 0) {
          meta.remove();
        }
      }

      if (metadata) {
        metadata.remove();
      }

      if (primaryHref) {
        card.style.cursor = "pointer";
        card.addEventListener("click", function (event) {
          if (event.target.closest("a[href]")) {
            return;
          }
          window.location.href = primaryHref;
        });
      }
    });
  }

  function initListingFilters() {
    if (document.body.dataset.page === "blogs") {
      return;
    }

    document.querySelectorAll(".quarto-listing").forEach(function (listing) {
      const list = listing.querySelector(".list");
      const cards = Array.from(listing.querySelectorAll(".quarto-post"));
      if (!list || cards.length === 0) {
        return;
      }

      const controls = document.createElement("div");
      controls.className = "listing-controls";
      controls.innerHTML =
        '<input class="listing-search" type="search" placeholder="Search this page" aria-label="Search this page">' +
        '<div class="listing-status" aria-live="polite"></div>';
      listing.insertBefore(controls, list);

      const searchInput = controls.querySelector(".listing-search");
      const status = controls.querySelector(".listing-status");
      const categories = Array.from(document.querySelectorAll(".quarto-listing-category .category"));
      let activeCategory = "";

      function update() {
        const query = searchInput.value.trim().toLowerCase();
        let visibleCount = 0;

        cards.forEach(function (card) {
          const text = card.textContent.toLowerCase();
          const cardCategories = normalizeCategory(card.dataset.categories).split(",").filter(Boolean);
          const categoryMatch = !activeCategory || cardCategories.indexOf(activeCategory) !== -1;
          const queryMatch = !query || text.indexOf(query) !== -1;
          const isVisible = categoryMatch && queryMatch;
          card.hidden = !isVisible;
          if (isVisible) {
            visibleCount += 1;
          }
        });

        status.textContent = visibleCount + " item" + (visibleCount === 1 ? "" : "s");
      }

      categories.forEach(function (categoryNode) {
        categoryNode.addEventListener("click", function () {
          const category = normalizeCategory(categoryNode.dataset.category);
          activeCategory = activeCategory === category ? "" : category;
          categories.forEach(function (node) {
            node.classList.toggle("is-active", normalizeCategory(node.dataset.category) === activeCategory && activeCategory !== "");
          });
          update();
        });
      });

      searchInput.addEventListener("input", update);
      update();
    });
  }

  function initTocHighlight() {
    const tocLinks = Array.from(document.querySelectorAll("#TOC a[href^='#']"));
    if (tocLinks.length === 0 || !("IntersectionObserver" in window)) {
      return;
    }

    const sections = tocLinks
      .map(function (link) {
        const href = link.getAttribute("href") || "";
        const rawId = href.charAt(0) === "#" ? href.slice(1) : href;
        if (!rawId) {
          return null;
        }
        const decodedId = decodeURIComponent(rawId);
        const target = document.getElementById(decodedId) || document.getElementById(rawId);
        return target ? { link: link, target: target } : null;
      })
      .filter(Boolean);

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          tocLinks.forEach(function (link) {
            link.classList.remove("is-active");
          });

          const match = sections.find(function (item) {
            return item.target === entry.target;
          });

          if (match) {
            match.link.classList.add("is-active");
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0.1, 0.5, 1]
      }
    );

    sections.forEach(function (item) {
      observer.observe(item.target);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initProjectDetailToc();
    if (document.querySelector("#quarto-margin-sidebar")) {
      document.body.classList.add("has-sidebar");
    }
    renderHeader();
    renderMobileBottomNav();
    if (document.body.dataset.footer === "true") {
      renderFooter();
    }
    renderIcons();
    initProjectDetailActionLinks();
    initCopyButtons();
    initEmailCopy();
    initPublicationsAccordion();
    initProjectsAccordion();
    initBlogsListing();
    initListingFilters();
    initTocHighlight();
  });
})();
