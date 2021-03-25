import { useEffect, useState, useCallback } from "react";
import Project from "../api/project";

interface UseCustomer {
  error?: any;
  loading: boolean;
  project?: any;
  refreshProject(customer?: any): void;
}

const useProject = (userId: string): UseCustomer => {
    const [loading, setLoading] = useState(!!userId);
    const [error, setError] = useState();
    const [project, setProject] = useState<any>();


  const refreshProject = useCallback(
    (project?: any) => {
      if (project) {
        setProject(project);
        return project;
      }

      if (userId) {
        setLoading(true);
        return Project.getForm(userId)
          .then(project => {
            setProject(project.result);
            setError(undefined);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }
    },
    [userId],
  );

  useEffect(() => {
    refreshProject();
  }, [userId, refreshProject]);

  return { loading, error, project, refreshProject };
};

export default useProject;
