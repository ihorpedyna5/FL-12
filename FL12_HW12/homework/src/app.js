

const Router = {
	terms : [],
	checkTerms(){
		this.terms = [];
		for (let i = 0; i < localStorage.length; i++) {
			let term = localStorage.key(i);
			let definition = localStorage[term];

			this.terms.push({
				term: term,
				definition: definition
			})
		}
		return this.terms;
	},
	init() {
		addEventListener('hashchange', function () {
			const pageName = location.hash.slice(1);
			const root = document.getElementById('root');
			root.innerHTML = Router.changeTo(pageName);
			if (pageName === '') {
				Router.fillTerms();
				const termsBlocks = document.querySelectorAll('.term');

				for (let i = 0; i < termsBlocks.length; i++) {
					termsBlocks[i].addEventListener('click', function() {
						this.classList.toggle('checked');
					})
				}
			} else if ( pageName === 'add' ) {
				const firstItem = 0;
				const addButton = document.querySelector('.add-term');
				const termInput = document.getElementsByName('term')[firstItem];
				const definitionInput = document.getElementsByName('definition')[firstItem];

				addButton.addEventListener('click', function() {
					if (termInput.value && definitionInput.value) {
						localStorage.setItem(termInput.value, definitionInput.value)
					} else {
						alert('Term should not be empty')
					}
				})
			} else if ( pageName.startsWith('modify') ) {
				const editButton = document.querySelector('.edit-term')

				editButton.addEventListener('click', function() {
					const firstItem = 0;
					const definitionInput = document.getElementsByName('definition')[firstItem];
					const termInput = document.getElementsByName('term')[firstItem];
					const id = +pageName.split(':')[1];
					
					localStorage.removeItem(Router.terms[id].term);
					localStorage.setItem(termInput.value, definitionInput.value);
				})
			}
		})
	},
	changeTo(pageName) {
		if (pageName === 'add') {
			return (
				`<div class="add-page">
				<input type="text" name="term">
				<input type="text" name="definition">
				<a href="#" class="add-term">add term</a>
				<a href="#" class="close">close</a>
				</div>`)
		} else if ( pageName === '' ) {
			return (
				`<div class="main-page ">
				<div class="terms">
				</div>
				<div class="add-block"><a href="#add">Add term</a></div>
				</div>`)
		} else if ( pageName.startsWith('modify') ) {
			const id = +pageName.split(':')[1];
			const term = Router.terms[id].term;
			const definition = Router.terms[id].definition;
			return (
				`<div class="edit-page">
				<input type="text" name="term" value = "${term}">
				<input type="text" name="definition" value = "${definition}">
				<a href="#" class="edit-term">edit term</a>
				<a href="#" class="close">close</a>
				</div>`)
		}
	},
	fillTerms() {
		const termsBlock = document.querySelector('.terms');
		const terms = Router.checkTerms();
		for (let i = 0; i < terms.length; i++) {
			let term = Router.addTerm(terms[i].term, terms[i].definition, i);
			termsBlock.innerHTML += term;
		}
	},
	addTerm(term, definition, i) {
		return (
			`<div class="term" id = "${i}">
			<div class="term-content">
			${term} - <i>${definition}</i>
			</div>
			<div class="term-buttons">
			<a href="#modify/:${i}" class = "edit" >Edit</a>
			<a href="#" class = "remove" onclick = "Router.removeTerm(${i})">Remove</a>
			</div>
			</div>`)
	},
	removeTerm(i) {
		let root = document.getElementById('root');
		localStorage.removeItem(this.terms[i].term);
		root.innerHTML = Router.changeTo('');
		Router.fillTerms();
	}
}

Router.init();

const pageName = location.hash.slice(1);
if (pageName === '') {
				Router.fillTerms();
				const termsBlocks = document.querySelectorAll('.term');

				for (let i = 0; i < termsBlocks.length; i++) {
					termsBlocks[i].addEventListener('click', function() {
						this.classList.toggle('checked');
					})
				}
			}

