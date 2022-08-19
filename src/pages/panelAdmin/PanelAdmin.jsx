import "./panel.css";
import "./table.css";
import { Routes, Route } from "react-router-dom";
import UserTable from "./user/userTable/UserTable";
import CategoryTable from "./category/CategoryTable";
import PackageTable from "./package/packageTable/PackageTable";
import DiscountTable from "./discount/DiscountTable";
import MenuTopAdmin from "../../component/menuTopAdmin/MenuTopAdmin";
import SideBarAdmin from "../../component/sideBarAdmin/SideBarAdmin";
import OrganizationTable from "./organization/organizationTabel/OrganizationTable";
import Dashboard from "./dashboard/Dashboard";
import NotFoundPanel from "../error/NotFoundPanel";
import ContactTable from "./contact/ContactTable";
import MenuTable from "./menu/menuTable/MenuTable";
import IdentityAdmin from "./identityAdmin/IdentityAdmin";
import ComplementValueTable from "./organization/complementValue/ComplementValueTable";
import InventoryTable from "./organization/inventory/InventoryTable";
import TypeAdd from "./organization/type/TypeAdd";
import TypeTable from "./organization/type/TypeTable";
import TypeEdit from "./organization/type/TypeEdit";
import store from "./store";
import { Provider } from "react-redux";
import OrganizationAdd from "./organization/organizationTabel/OrganizationAdd";
import OrganizationEdit from "./organization/organizationTabel/OrganizationEdit";
import ComplementTypeTable from "./organization/complementType/ComplementTypeTable";
import ComplementTypeAdd from "./organization/complementType/ComplementTypeAdd";
import ComplementTypeEdit from "./organization/complementType/ComplementTypeEdit";
import ComplementValueAdd from "./organization/complementValue/ComplementValueAdd";
import ComplementValueEdit from "./organization/complementValue/ComplementValueEdit";
import InventoryAdd from "./organization/inventory/InventoryAdd";
import InventoryEdit from "./organization/inventory/InventoryEdit";
import ContactShow from "./contact/ContactShow";
import DiscountAdd from "./discount/DiscountAdd";
import DiscountEdit from "./discount/DiscountEdit";
import { fetchPosts } from "./organization/type/postsSlice";
import { fetchOrganization } from "./organization/organizationTabel/organizationSlice";
import CategoryAdd from "./category/CategoryAdd";
import CategoryEdit from "./category/CategoryEdit";
// import { fetchComplementType } from "./organization/complementType/complementTypeSlice";

export default function PanelAdmin() {
  store.dispatch(fetchPosts());
  store.dispatch(fetchOrganization());
  // store.dispatch(fetchComplementType());
  return (
    <Provider store={store}>
      <MenuTopAdmin />

      <div className="panel">
        <div className="sidebar panelBox">
          <SideBarAdmin />
        </div>
        <div className="page panelBox">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<UserTable />} />
            <Route path="/menu" element={<MenuTable />} />
            <Route path="/discount" element={<DiscountTable />} />
            <Route path="/discountAdd" element={<DiscountAdd />} />
            <Route path="/discountEdit" element={<DiscountEdit />} />
            <Route path="/category" element={<CategoryTable />} />
            <Route path="/categoryAdd" element={<CategoryAdd />} />
            <Route path="/categoryEdit" element={<CategoryEdit />} />
            <Route path="/package" element={<PackageTable />} />
            <Route path="/type" element={<TypeTable />} />
            <Route path="/complementType" element={<ComplementTypeTable />} />
            <Route path="/complementTypeAdd" element={<ComplementTypeAdd />} />
            <Route
              path="/complementTypeEdit"
              element={<ComplementTypeEdit />}
            />
            <Route path="/organization" element={<OrganizationTable />} />
            <Route path="/organizationAdd" element={<OrganizationAdd />} />
            <Route path="/organizationEdit" element={<OrganizationEdit />} />
            <Route path="/complementValue" element={<ComplementValueTable />} />
            <Route
              path="/complementValueAdd"
              element={<ComplementValueAdd />}
            />
            <Route
              path="/complementValueEdit"
              element={<ComplementValueEdit />}
            />
            <Route path="/inventory" element={<InventoryTable />} />
            <Route path="/inventoryAdd" element={<InventoryAdd />} />
            <Route path="/inventoryEdit" element={<InventoryEdit />} />
            <Route path="/contact" element={<ContactTable />} />
            <Route path="/contactShow" element={<ContactShow />} />
            <Route path="*" element={<NotFoundPanel />} />
            <Route path="/identityAdmin" element={<IdentityAdmin />} />
            <Route path="/typeAdd" element={<TypeAdd />} />
            <Route path="/typeEdit/:id" element={<TypeEdit />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
