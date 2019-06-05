/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function VirusScanProfileScanActionArgs() { }
/** @type {?} */
VirusScanProfileScanActionArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
VirusScanProfileScanActionArgs.prototype.virusScanProfileId;
/**
 * Build request payload for service 'virusScanProfile' action 'scan'.
 *
 * Usage: Scan flavor asset according to virus scan profile
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export class VirusScanProfileScanAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'n', responseSubType: '', responseConstructor: null });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'virusscan_virusscanprofile' },
            action: { type: 'c', default: 'scan' },
            flavorAssetId: { type: 's' },
            virusScanProfileId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    VirusScanProfileScanAction.prototype.flavorAssetId;
    /** @type {?} */
    VirusScanProfileScanAction.prototype.virusScanProfileId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlydXNTY2FuUHJvZmlsZVNjYW5BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1ZpcnVzU2NhblByb2ZpbGVTY2FuQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLGlDQUFrQyxTQUFRLGNBQXNCOzs7O0lBS2xFLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ3hGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUM1RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDMUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBWaXJ1c1NjYW5Qcm9maWxlU2NhbkFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHR2aXJ1c1NjYW5Qcm9maWxlSWQ/IDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndmlydXNTY2FuUHJvZmlsZScgYWN0aW9uICdzY2FuJy5cbiAqXG4gKiBVc2FnZTogU2NhbiBmbGF2b3IgYXNzZXQgYWNjb3JkaW5nIHRvIHZpcnVzIHNjYW4gcHJvZmlsZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIG51bWJlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVmlydXNTY2FuUHJvZmlsZVNjYW5BY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxudW1iZXI+IHtcblxuICAgIGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdHZpcnVzU2NhblByb2ZpbGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBWaXJ1c1NjYW5Qcm9maWxlU2NhbkFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ24nLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndmlydXNzY2FuX3ZpcnVzc2NhbnByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzY2FuJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHZpcnVzU2NhblByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=