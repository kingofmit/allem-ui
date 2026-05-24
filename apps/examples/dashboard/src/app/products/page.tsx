"use client";

import { useState } from "react";
import {
  Card, CardHeader, CardBody,
  Badge,
  Button,
  Input,
  Checkbox,
  Select, SelectItem,
  Modal, ModalContent,
  PopoverTrigger, Popover,
  ToastProvider, useToast,
} from "@allem-ui/react";
import { DataGrid, type ColumnDef } from "@allem-ui/data-grid";
import { DateRangePicker } from "@allem-ui/date-picker";
import { DashboardShell } from "../../components/DashboardShell";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "draft" | "archived";
  sku: string;
  [key: string]: unknown;
}

const products: Product[] = [
  { id: "1", name: "Wireless Headphones Pro", category: "Electronics", price: 199.99, stock: 142, status: "active", sku: "WHP-001" },
  { id: "2", name: "Ergonomic Desk Chair", category: "Furniture", price: 449.00, stock: 38, status: "active", sku: "EDC-012" },
  { id: "3", name: "Organic Cotton T-Shirt", category: "Clothing", price: 34.99, stock: 520, status: "active", sku: "OCT-100" },
  { id: "4", name: "Mechanical Keyboard", category: "Electronics", price: 159.00, stock: 87, status: "active", sku: "MKB-045" },
  { id: "5", name: "Standing Desk Converter", category: "Furniture", price: 299.00, stock: 0, status: "archived", sku: "SDC-003" },
  { id: "6", name: "Running Shoes Ultra", category: "Clothing", price: 129.99, stock: 203, status: "active", sku: "RSU-220" },
  { id: "7", name: "4K Monitor 27\"", category: "Electronics", price: 549.00, stock: 64, status: "active", sku: "MON-027" },
  { id: "8", name: "Yoga Mat Premium", category: "Fitness", price: 79.99, stock: 310, status: "active", sku: "YMP-050" },
  { id: "9", name: "Bluetooth Speaker Mini", category: "Electronics", price: 49.99, stock: 0, status: "draft", sku: "BSM-007" },
  { id: "10", name: "Leather Laptop Bag", category: "Accessories", price: 189.00, stock: 91, status: "active", sku: "LLB-033" },
  { id: "11", name: "Smart Water Bottle", category: "Fitness", price: 44.99, stock: 178, status: "active", sku: "SWB-015" },
  { id: "12", name: "Noise Cancelling Earbuds", category: "Electronics", price: 89.99, stock: 256, status: "active", sku: "NCE-088" },
  { id: "13", name: "Bamboo Desk Organizer", category: "Furniture", price: 39.99, stock: 0, status: "draft", sku: "BDO-002" },
  { id: "14", name: "Merino Wool Hoodie", category: "Clothing", price: 119.00, stock: 67, status: "active", sku: "MWH-110" },
  { id: "15", name: "USB-C Hub 7-in-1", category: "Electronics", price: 69.99, stock: 445, status: "active", sku: "UCH-007" },
];

const categories = ["All", "Electronics", "Furniture", "Clothing", "Fitness", "Accessories"];

const columns: ColumnDef<Product, any>[] = [
  {
    accessorKey: "name",
    header: "Product",
    cell: ({ row }) => (
      <div>
        <span className="font-medium">{row.original.name}</span>
        <span className="block text-xs text-neutral-400 mt-0.5">{row.original.sku}</span>
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ getValue }) => (
      <Badge variant="subtle" color="neutral" size="sm">{getValue() as string}</Badge>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => `$${(getValue() as number).toFixed(2)}`,
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ getValue }) => {
      const stock = getValue() as number;
      return (
        <span className={stock === 0 ? "text-red-500" : stock < 50 ? "text-amber-500" : ""}>
          {stock === 0 ? "Out of stock" : stock.toLocaleString()}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => {
      const status = getValue() as string;
      const color = status === "active" ? "success" : status === "draft" ? "warning" : "neutral";
      return <Badge variant="subtle" color={color} size="sm">{status}</Badge>;
    },
  },
];

function ProductsContent() {
  const { toast } = useToast();
  const [category, setCategory] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const filtered = products.filter((p) => {
    if (category !== "All" && p.category !== category) return false;
    if (inStockOnly && p.stock === 0) return false;
    return true;
  });

  return (
    <DashboardShell
      active="/products"
      title="Products"
      headerRight={
        <>
          <Badge variant="subtle" color="primary" size="sm">{filtered.length} items</Badge>
          <Button
            variant="solid"
            size="sm"
            onPress={() => toast({ title: "Coming soon", description: "Product creation wizard." })}
          >
            Add Product
          </Button>
        </>
      }
    >
      {/* Filters */}
      <Card>
        <CardBody>
          <div className="flex flex-wrap items-center gap-4">
            <div className="w-48">
              <Select
                label="Category"
                selectedKey={category}
                onSelectionChange={(key) => setCategory(key as string)}
              >
                {categories.map((cat) => (
                  <SelectItem key={cat} id={cat}>{cat}</SelectItem>
                ))}
              </Select>
            </div>

            <div className="w-64">
              <DateRangePicker label="Date Range" className="w-full" />
            </div>

            <Checkbox isSelected={inStockOnly} onChange={setInStockOnly}>
              In stock only
            </Checkbox>

            <PopoverTrigger>
              <Button variant="outline" size="sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M4 8h8M6 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Columns
              </Button>
              <Popover>
                <div className="w-48 space-y-2">
                  <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Visible Columns</p>
                  {["Product", "Category", "Price", "Stock", "Status"].map((col) => (
                    <Checkbox key={col} defaultSelected>{col}</Checkbox>
                  ))}
                </div>
              </Popover>
            </PopoverTrigger>
          </div>
        </CardBody>
      </Card>

      {/* Data Grid */}
      <DataGrid
        data={filtered}
        columns={columns}
        enableSorting
        enableFiltering
        enableRowSelection
        enablePagination
        pageSize={8}
        onRowClick={(product) => {
          setEditProduct(product);
          setEditName(product.name);
          setEditPrice(product.price.toString());
        }}
      />

      {/* Edit Modal */}
      <Modal isOpen={!!editProduct} onOpenChange={(open) => !open && setEditProduct(null)}>
        <ModalContent>
          {editProduct && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Edit Product</h3>
              <div className="space-y-3">
                <Input label="Product Name" value={editName} onChange={setEditName} />
                <Input label="Price" value={editPrice} onChange={setEditPrice} type="number" />
                <div className="flex items-center gap-2">
                  <span className="text-sm text-neutral-500">SKU:</span>
                  <Badge variant="subtle" color="neutral">{editProduct.sku}</Badge>
                </div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onPress={() => setEditProduct(null)}>Cancel</Button>
                <Button
                  variant="solid"
                  onPress={() => {
                    setEditProduct(null);
                    toast({ title: "Product updated", description: `${editName} has been saved.` });
                  }}
                >
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </DashboardShell>
  );
}

export default function ProductsPage() {
  return (
    <ToastProvider>
      <ProductsContent />
    </ToastProvider>
  );
}
