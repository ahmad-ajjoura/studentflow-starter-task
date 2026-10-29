export default function StatsCard({ title, value, icon, colorVariant = "default", subtitle }) {
  const tasks = []
  const totalTasks = tasks.length

  const CTask = tasks.complete

  const PClass = tasks.length - tasks.complete




  // TODO: Build your StatsCard component here
  return (
    <div className={`stats-card variant-${colorVariant}`}>
      {/* TODO: Display icon, title, value, and subtitle */}
      <statsCard>
        title="TOTAL TASKS"
        icon="📝"
        value={tasks.length}
        subTitle="All assigned tasks"
      </statsCard>

      <statsCard>
        title="COMPLETED"
        icon="✅"
        value=
        subTitle="38% completion rate"
      </statsCard>

      <statsCard>
        title="Pending"
        icon="⏳"
        value=
        subTitle="Tasks in progress"
      </statsCard>

      <statsCard>
        title="Overdue"
        icon="⚠️"
        value=
        subTitle="Needs attention"
      </statsCard>

      <div>
        title={title}
        icon={icon}
        value={value}
        subtitle={subtitle}
      </div>

      <div>
        title={title}
        icon={icon}
        value={value}
        subtitle={subtitle}
      </div>

      <div>
        title={title}
        icon={icon}
        value={value}
        subtitle={subtitle}
      </div>

      <div>
        title={title}
        icon={icon}
        value={value}
        subtitle={subtitle}
      </div>

    </div>
  );
}

