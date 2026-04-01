export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical bar */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary" />

      <div className="space-y-10">
        {items.map((item, index) => (
          <div key={index} className="relative flex gap-8 pl-12">
            {/* Dot */}
            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/30 shrink-0">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>

            {/* Content card */}
            <div className="gradient-border bg-card rounded-xl p-5 flex-1 hover:-translate-y-1 transition-transform duration-200">
              <span className="text-secondary text-xs font-bold tracking-wider uppercase">
                {item.year}
              </span>
              <h3 className="text-white font-bold text-lg mt-1">{item.title}</h3>
              <p className="text-primary text-sm font-medium">{item.subtitle}</p>
              <p className="text-muted text-sm mt-2 leading-relaxed">{item.description}</p>
              {item.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-dark text-secondary text-xs rounded-full border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
