const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

const createN = data => {
  const noude = document.createElement('div');
  const { folder, title, children } = data;
  noude.className = !folder ? 'file' : 'folder hide';
  noude.innerHTML = `
  <span class="title">
    <i class="material-icons" 
    style="color: 
    ${
      !folder
        ? 'rgb(124, 124, 124);">insert_drive_file'
        : ' rgb(255, 208, 0);">folder'
    }</i>
      ${title}
  </span>`;

  if (!children && noude.classList.contains('folder')) {
    noude.innerHTML = `${noude.innerHTML} <span class="ph">Folder is empty</span>`;
  }

  return noude;
};

const par = (element, parent) => {
  const { children } = element;
  const noude = createN(element);
  parent.append(noude);

  if (!children) {
    return;
  }
  children.forEach(ch => par(ch, noude));
};

structure.forEach(el => par(el, rootNode));

const newfolder = rootNode.querySelectorAll('.title');

const tougle = event => {
  event.stopPropagation();
  const { target } = event;
  const currentNoude = target.classList;
  const iconn = target.querySelector('i');
  const { classList } = event.target.parentNode;

  if (classList.contains('folder')) {
    if (currentNoude.contains('title')) {
      classList.tougle('hide');
    }
    if (classList.contains('hide')) {
      iconn.textContent = 'folder';
    } else if (iconn) {
      iconn.textContent = 'folder_open';
    }
  }
};

newfolder.forEach(folder => folder.parentNode.addEventListener('click', tougle));
