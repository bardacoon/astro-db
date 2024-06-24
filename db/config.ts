import { column, defineDb, defineTable } from 'astro:db';

const Block = defineTable({
  columns: {
    slug: column.text(),
    html: column.text(),
    css: column.text(),
    js: column.text(),
  }
})

export default defineDb({
  tables: {
    Block,
  }
});
