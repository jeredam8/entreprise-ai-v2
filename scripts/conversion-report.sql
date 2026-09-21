-- Aggregate behavioral counts (not unique visitors), last 28 days.
SELECT day,event,kind,outcome,sum(count) AS actions
FROM public.entreprise_ai_events_daily
WHERE day >= current_date-27 GROUP BY day,event,kind,outcome ORDER BY day,event;
-- Actual received requests: authoritative conversion count, test rows excluded.
SELECT kind,count(*) AS received
FROM public.demandes_site
WHERE site='entreprise.ai' AND created_at >= now()-interval '28 days'
AND coalesce(payload->>'source','') <> 'verification-technique'
GROUP BY kind;
-- Pending notifications: inspect before retry; do not blindly resend after 24 hours.
SELECT id,created_at,kind,payload->>'_notification' AS notification,
payload->>'_resend_id' AS resend_id
FROM public.demandes_site WHERE site='entreprise.ai'
AND payload->>'_notification'='pending' ORDER BY created_at;
