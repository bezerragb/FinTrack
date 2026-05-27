import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import { useEffect } from 'react';

import { PieChart } from 'react-native-chart-kit';

import { styles } from '../styles/reportsStyles';

import { useFinanceStore } from '../store/useFinanceStore';

import { useCategoryStore } from '../store/useCategoryStore';

export default function Reports() {

  const entries = useFinanceStore(
    (state) => state.entries
  );

  const loadEntries = useFinanceStore(
    (state) => state.loadEntries
  );

  const categories = useCategoryStore(
    (state) => state.categories
  );

  const loadCategories = useCategoryStore(
    (state) => state.loadCategories
  );

  useEffect(() => {

    loadEntries();

    loadCategories();

  }, []);

  // GASTOS

  const expenseEntries = entries.filter(
    (item) => item.type === 'expense'
  );

  const groupedExpenses = categories
    .map((category) => {

      const total = expenseEntries
        .filter(
          (entry) =>
            entry.category === category.name
        )
        .reduce(
          (sum, entry) =>
            sum + entry.amount,
          0
        );

      return {
        name: category.name,
        population: total,
        color: category.color,
        legendFontColor: '#334155',
        legendFontSize: 12,
      };
    })
    .filter((item) => item.population > 0);

  // GANHOS

  const incomeEntries = entries.filter(
    (item) => item.type === 'income'
  );

  const groupedIncomes = categories
    .map((category) => {

      const total = incomeEntries
        .filter(
          (entry) =>
            entry.category === category.name
        )
        .reduce(
          (sum, entry) =>
            sum + entry.amount,
          0
        );

      return {
        name: category.name,
        population: total,
        color: category.color,
        legendFontColor: '#334155',
        legendFontSize: 12,
      };
    })
    .filter((item) => item.population > 0);

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <Text style={styles.title}>
        Relatórios
      </Text>

      {/* SWITCH */}

      <View style={styles.switchContainer}>

        <TouchableOpacity
          style={[
            styles.switchButton,
            styles.switchActive,
          ]}
        >
          <Text style={styles.switchText}>
            Mensal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.switchButton}
        >
          <Text style={styles.switchText}>
            Anual
          </Text>
        </TouchableOpacity>

      </View>

      {/* HEADER MÊS */}

      <View style={styles.monthContainer}>

        <TouchableOpacity
          style={styles.arrowButton}
        >
          <Text>←</Text>
        </TouchableOpacity>

        <Text style={styles.monthText}>
          Maio De 2026
        </Text>

        <TouchableOpacity
          style={styles.arrowButton}
        >
          <Text>→</Text>
        </TouchableOpacity>

      </View>

      {/* GASTOS */}

      <View style={styles.reportCard}>

        <Text style={styles.expenseTitle}>
          Gastos por Categoria
        </Text>

        {groupedExpenses.length > 0 ? (

        <PieChart
          data={groupedExpenses}
          width={
            Dimensions.get('window').width - 85
          }
          height={200}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          hasLegend={true}
          chartConfig={{
            color: () => '#000',
          }}
        />

        ) : (

          <View style={styles.emptyContainer}>

            <Text style={styles.emptyText}>
              Nenhum gasto neste período
            </Text>

          </View>

        )}

      </View>

      {/* GANHOS */}

      <View style={styles.reportCard}>

        <Text style={styles.incomeTitle}>
          Ganhos por Categoria
        </Text>

        {groupedIncomes.length > 0 ? (

          <PieChart
            data={groupedIncomes}
            width={
              Dimensions.get('window').width - 85
            }
            height={200}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            chartConfig={{
              color: () => '#000',
            }}
          />

        ) : (

          <View style={styles.emptyContainer}>

            <Text style={styles.emptyText}>
              Nenhum ganho neste período
            </Text>

          </View>

        )}

      </View>

    </ScrollView>
  );
}