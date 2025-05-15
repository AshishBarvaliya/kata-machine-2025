export function test_list(list: List<number>): void {
    list.append(5);
    list.append(7);
    list.append(9);

    expect(list.get(2)).toEqual(9);
    expect(list.removeAt(1)).toEqual(7);
    expect(list.length).toEqual(2);

    list.append(11);
    expect(list.removeAt(1)).toEqual(9);
    expect(list.remove(9)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(5);
    expect(list.removeAt(0)).toEqual(11);
    expect(list.length).toEqual(0);

    list.prepend(5);
    list.prepend(7);
    list.prepend(9);

    expect(list.get(2)).toEqual(5);
    expect(list.get(0)).toEqual(9);
    expect(list.remove(9)).toEqual(9);
    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(7);

    list.prepend(9);
    expect(list.length).toEqual(3);
    expect(list.get(1)).toEqual(7);

    list.insertAt(1, 1);
    expect(list.get(1)).toEqual(1);
    expect(list.length).toEqual(4);

    const list2 = new (list.constructor as any)(); // fresh instance without assuming any `clear`
    list2.insertAt(42, 0); // [42]
    expect(list2.get(0)).toEqual(42);
    expect(list2.length).toEqual(1);

    // Edge case: insert at index 1 when list has only one element
    list2.insertAt(99, 1); // [42, 99]
    expect(list2.get(1)).toEqual(99);
    expect(list2.length).toEqual(2);

    // Edge case: insert at index 0 in a single-element list
    const list3 = new (list.constructor as any)();
    list3.append(100);
    list3.insertAt(200, 0); // [200, 100]
    expect(list3.get(0)).toEqual(200);
    expect(list3.get(1)).toEqual(100);
    expect(list3.length).toEqual(2);
}
