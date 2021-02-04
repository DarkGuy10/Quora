const { app, session, BrowserWindow, shell } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

let mainWindow;
const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + 'icons/logo.ico'
  });

  // and load the index.html of the app.
  mainWindow.loadURL('http://quora.com')  
  mainWindow.maximize()
  //mainWindow.setMenu(null)
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    mainWindow.loadURL(url)
  })
};

app.on('ready', createWindow);
app.on('ready', async () => { // Loading extensions
//	await session.defaultSession.loadExtension(path.join(__dirname, 'DarkTheme'))
//	await session.defaultSession.loadExtension(path.join(__dirname, 'DarkTheme'))
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const contextMenu = require('electron-context-menu');

contextMenu({
	append: (defaultActions, params, browserWindow) => [
		{
			label: 'Reload Page',
			click: () => {
				mainWindow.webContents.reload();
			}
		},
		{
			label: 'Go back',
			click: () => {
				mainWindow.webContents.goBack();
			}
		},
		{
			label: 'Go forward',
			click: () => {
				mainWindow.webContents.goForward();
			}
		},
		{
			type: 'separator'
		},
		{
			label: 'Quit',
			click: () => {
				app.quit();
			}
		},
		{
			type: 'separator',
		},
		{
			label: 'Help',
			click: () => {
				shell.openExternal('https://darkguy10.github.io/Quora/');
			}
		}
	],
	showSaveImage: true,
	showSaveImageAs: true,
	showInspectElement: false,
	showSearchWithGoogle: false,
	showLookUpSelection: false
});