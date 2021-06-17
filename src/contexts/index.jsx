import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";
import { ModalProvider } from "./Modal";
import { GroupsProvider } from "./Groups";
import { UserGroupsProvider } from "./UserGroups";

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <UserGroupsProvider>
          <GroupsProvider>
            <ModalProvider>{children}</ModalProvider>
          </GroupsProvider>
        </UserGroupsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
