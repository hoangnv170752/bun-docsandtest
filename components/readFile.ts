const path = './assets/data.json';

const file = Bun.file(path);

export const readAssets = async () => {
    const contents = await file.json();

    console.log(contents);
}