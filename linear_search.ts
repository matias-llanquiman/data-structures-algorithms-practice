import * as fsPromise from "fs/promises";

async function dataSet(fileName: string): Promise<number[]> {
  const data: number[] = [];
  const file = await fsPromise.open(fileName);
  for await (const line of file.readLines()) {
    data.push(Number(line));
  }
  await file.close();
  return data;
}

async function linearSearch(list: string, value: number): Promise<string> {
  const data = await dataSet(list);

  for (let i = 0; i <= data.length; i++) {
    if (data[i] === value) {
      return `value found at position: ${i + 1}`;
    }
  }
  return "value not found";
}

async function main() {
  console.log(await linearSearch("./numbers.csv", 6066));
}
main();
