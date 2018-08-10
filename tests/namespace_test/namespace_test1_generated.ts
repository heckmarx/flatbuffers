// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @enum
 */
export namespace NamespaceA.NamespaceB{
export enum EnumInNestedNS{
  A= 0,
  B= 1,
  C= 2
}};

/**
 * @constructor
 */
export namespace NamespaceA.NamespaceB{
export class TableInNestedNS {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns TableInNestedNS
 */
__init(i:number, bb:flatbuffers.ByteBuffer):TableInNestedNS {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param TableInNestedNS= obj
 * @returns TableInNestedNS
 */
static getRootAsTableInNestedNS(bb:flatbuffers.ByteBuffer, obj?:TableInNestedNS):TableInNestedNS {
  return (obj || new TableInNestedNS).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
foo():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_foo(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startTableInNestedNS(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param number foo
 */
static addFoo(builder:flatbuffers.Builder, foo:number) {
  builder.addFieldInt32(0, foo, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endTableInNestedNS(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace NamespaceA.NamespaceB{
export class StructInNestedNS {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns StructInNestedNS
 */
__init(i:number, bb:flatbuffers.ByteBuffer):StructInNestedNS {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns number
 */
a():number {
  return this.bb!.readInt32(this.bb_pos);
};

/**
 * @param number value
 * @returns boolean
 */
mutate_a(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 0);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns number
 */
b():number {
  return this.bb!.readInt32(this.bb_pos + 4);
};

/**
 * @param number value
 * @returns boolean
 */
mutate_b(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 * @param number a
 * @param number b
 * @returns flatbuffers.Offset
 */
static createStructInNestedNS(builder:flatbuffers.Builder, a: number, b: number):flatbuffers.Offset {
  builder.prep(4, 8);
  builder.writeInt32(b);
  builder.writeInt32(a);
  return builder.offset();
};

}
}
