# 💼 Portfolio Professionnel - Développeur Web

Portfolio moderne, responsive et professionnel pour présenter vos compétences et projets.

## 🎯 Caractéristiques

- ✅ **Design moderne** avec dégradés et animations fluides
- ✅ **6 projets** prêts à personnaliser
- ✅ **Section compétences** avec barres de progression animées
- ✅ **100% Responsive** - fonctionne sur tous les appareils
- ✅ **Menu hamburger** pour mobile
- ✅ **Animations au scroll** élégantes
- ✅ **Formulaire de contact** fonctionnel
- ✅ **Code propre** et commenté

## 📁 Structure des fichiers

```
mon-portfolio/
│
├── index.html          # Page principale
├── style.css           # Tous les styles
├── script.js           # JavaScript
└── README.md           # Ce fichier
```

## 🚀 Installation

1. **Téléchargez les fichiers**
   - Créez un dossier `mon-portfolio`
   - Créez les 3 fichiers : `index.html`, `style.css`, `script.js`
   - Copiez le contenu de chaque fichier

2. **Ouvrez le portfolio**
   - Double-cliquez sur `index.html`
   - Le site s'ouvrira dans votre navigateur

3. **C'est tout !** ✨

## ✏️ Personnalisation

### 1. Informations personnelles

Dans `index.html`, modifiez :

```html
<!-- Section Hero -->
<h1>Développeur Web Full-Stack</h1>
<p class="hero-subtitle">Votre titre</p>
<p class="hero-description">Votre description</p>

<!-- Section Contact -->
<p>votre.email@example.com</p>
<p>06 12 34 56 78</p>
<p>Votre Ville, France</p>
```

### 2. Couleurs du site

Dans `style.css`, ligne 2-8 :

```css
:root {
    --primary-color: #667eea;      /* Couleur principale */
    --secondary-color: #764ba2;    /* Couleur secondaire */
    --dark-color: #1a202c;         /* Couleur sombre */
    --light-color: #f7fafc;        /* Couleur claire */
}
```

### 3. Vos projets

Pour chaque projet, modifiez dans `index.html` :

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-overlay">
            <span class="project-icon">🌐</span> <!-- Votre icône -->
        </div>
    </div>
    <div class="project-info">
        <h3>Nom du Projet</h3>
        <p>Description du projet</p>
        <div class="project-tags">
            <span class="tag">Techno1</span>
            <span class="tag">Techno2</span>
        </div>
        <a href="#" class="project-link">Voir le projet →</a>
    </div>
</div>
```

**Icônes suggérées :**
- Sites web : 🌐
- Applications mobile : 📱
- Design : 🎨
- Dashboard : 📊
- Sécurité : 🔐
- IA/Bot : 🤖
- E-commerce : 🛒
- Blog : 📝

### 4. Vos compétences

Modifiez les pourcentages dans `index.html` :

```html
<div class="skill-progress" data-progress="90"></div>
<!-- Changez 90 par votre niveau (0-100) -->
```

### 5. Ajouter vos images de projets

Pour utiliser de vraies images au lieu des icônes :

1. Créez un dossier `images/` à côté de `index.html`
2. Mettez vos images dedans
3. Dans `index.html`, remplacez :

```html
<!-- Au lieu de -->
<div class="project-image">
    <div class="project-overlay">
        <span class="project-icon">🌐</span>
    </div>
</div>

<!-- Utilisez -->
<div class="project-image" style="background-image: url('images/projet1.jpg'); background-size: cover; background-position: center;">
</div>
```

## 🎨 Personnalisation avancée

### Changer la police

Dans `style.css`, ligne 21 :

```css
body {
    font-family: 'Votre Police', -apple-system, sans-serif;
}
```

Pour utiliser Google Fonts, ajoutez dans `index.html` (dans le `<head>`) :

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Puis dans `style.css` :

```css
body {
    font-family: 'Poppins', sans-serif;
}
```

### Modifier les animations

Dans `style.css`, cherchez `@keyframes fadeInUp` et ajustez les valeurs.

## 🌐 Mise en ligne

### Sur GitHub Pages (Gratuit)

1. Créez un compte sur [GitHub](https://github.com)
2. Créez un nouveau repository nommé `mon-portfolio`
3. Uploadez vos 3 fichiers
4. Allez dans Settings > Pages
5. Sélectionnez `main` comme source
6. Votre site sera à : `https://votre-username.github.io/mon-portfolio`

### Sur Netlify (Gratuit)

1. Créez un compte sur [Netlify](https://netlify.com)
2. Glissez-déposez votre dossier
3. Votre site est en ligne !

## 📱 Test responsive

Testez votre site sur différentes tailles :

- **Desktop** : 1920px+
- **Laptop** : 1366px - 1919px
- **Tablette** : 768px - 1365px
- **Mobile** : 320px - 767px

Dans Chrome : F12 > Toggle device toolbar (Ctrl+Shift+M)

## ✅ Checklist avant mise en ligne

- [ ] Toutes les informations personnelles sont à jour
- [ ] Les 6 projets sont personnalisés
- [ ] L'email de contact est correct
- [ ] Les liens sociaux sont corrects
- [ ] Le site fonctionne sur mobile
- [ ] Toutes les animations fonctionnent
- [ ] Le formulaire de contact fonctionne
- [ ] Aucune erreur dans la console (F12)

## 🐛 Problèmes courants

### Le CSS ne s'applique pas
- Vérifiez que `style.css` est dans le même dossier que `index.html`
- Vérifiez l'orthographe : `<link rel="stylesheet" href="style.css">`

### Le JavaScript ne fonctionne pas
- Vérifiez que `script.js` est dans le même dossier
- Ouvrez la console (F12) pour voir les erreurs

### Les animations ne marchent pas
- Attendez que la page soit complètement chargée
- Scrollez lentement pour déclencher les animations

### Le menu mobile ne s'ouvre pas
- Vérifiez que le JavaScript est chargé
- Regardez la console pour les erreurs

## 💡 Conseils

1. **Images optimisées** : Utilisez des images < 200 KB
2. **Projets réels** : Montrez vos vrais projets
3. **Descriptions claires** : Expliquez bien ce que vous avez fait
4. **Mettez à jour** : Ajoutez vos nouveaux projets régulièrement
5. **Testez** : Demandez à des amis de tester votre site

## 📧 Support

Si vous avez des questions :
- Vérifiez d'abord la console (F12)
- Relisez ce README
- Comparez avec les exemples

## 🎉 Bon courage !

Votre portfolio est maintenant prêt à impressionner les recruteurs ! 🚀

---

**Créé avec ❤️ pour votre réussite professionnelle**# mon-portfolio
