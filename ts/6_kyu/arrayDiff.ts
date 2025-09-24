export function arrayDiff(a: number[], b: number[]): number[] {

    const returnArr: number[] = [];
    const arrALength:number = a.length;

    // remove duplicates from b
    const arrBUnique: number[] = [...new Set(b)];
    const arrBUniqueLength:number = arrBUnique.length;

    // for each 
    for(let i:number = 0; i < arrBUniqueLength; i++) {
        const arrBUniqueElement:number = arrBUnique[i];

        a = a.filter((aElement) => aElement != arrBUniqueElement);

    }
    return a;
  }


console.log(arrayDiff([1,2,2,3],[2])) // [1,3];
