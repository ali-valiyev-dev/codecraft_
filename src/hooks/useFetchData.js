import { useState, useEffect } from "react";
import supabase from "../api/supabaseClient";

const useFetchData = (tableName, selectColumns, eqCondition = []) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        let query = supabase.from(tableName).select(selectColumns);

        if (eqCondition.length === 2) {
          const [column, value] = eqCondition;
          query = query.eq(column, value);
        }

        const { data, error } = await query;

        if (error) throw error;
        setData(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName, selectColumns, JSON.stringify(eqCondition)]);

  return { data, error, loading };
};

export default useFetchData;
