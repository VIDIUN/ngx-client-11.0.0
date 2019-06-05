/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function ScheduledTaskProfileServeDryRunResultsActionArgs() { }
/** @type {?} */
ScheduledTaskProfileServeDryRunResultsActionArgs.prototype.requestId;
/**
 * Build request payload for service 'scheduledTaskProfile' action 'serveDryRunResults'.
 *
 * Usage: Serves dry run results by its request id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export class ScheduledTaskProfileServeDryRunResultsAction extends KalturaFileRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'scheduledtask_scheduledtaskprofile' },
            action: { type: 'c', default: 'serveDryRunResults' },
            requestId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ScheduledTaskProfileServeDryRunResultsAction.prototype.requestId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVkVGFza1Byb2ZpbGVTZXJ2ZURyeVJ1blJlc3VsdHNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1NjaGVkdWxlZFRhc2tQcm9maWxlU2VydmVEcnlSdW5SZXN1bHRzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWNyRixNQUFNLG1EQUFvRCxTQUFRLGtCQUFrQjs7OztJQUloRixZQUFZLElBQXVEO1FBRS9ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNwRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RCxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2pCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlZFRhc2tQcm9maWxlU2VydmVEcnlSdW5SZXN1bHRzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICByZXF1ZXN0SWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzY2hlZHVsZWRUYXNrUHJvZmlsZScgYWN0aW9uICdzZXJ2ZURyeVJ1blJlc3VsdHMnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgZHJ5IHJ1biByZXN1bHRzIGJ5IGl0cyByZXF1ZXN0IGlkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZWRUYXNrUHJvZmlsZVNlcnZlRHJ5UnVuUmVzdWx0c0FjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICByZXF1ZXN0SWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZWR1bGVkVGFza1Byb2ZpbGVTZXJ2ZURyeVJ1blJlc3VsdHNBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2NoZWR1bGVkdGFza19zY2hlZHVsZWR0YXNrcHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlRHJ5UnVuUmVzdWx0cycgfSxcblx0XHRcdFx0cmVxdWVzdElkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==