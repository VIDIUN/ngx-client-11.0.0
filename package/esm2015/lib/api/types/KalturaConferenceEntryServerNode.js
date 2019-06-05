/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConferenceRoomStatus } from './KalturaConferenceRoomStatus';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';
/**
 * @record
 */
export function KalturaConferenceEntryServerNodeArgs() { }
export class KalturaConferenceEntryServerNode extends KalturaEntryServerNode {
    /**
     * @param {?=} data
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
            objectType: { type: 'c', default: 'KalturaConferenceEntryServerNode' },
            confRoomStatus: { type: 'en', readOnly: true, subTypeConstructor: KalturaConferenceRoomStatus, subType: 'KalturaConferenceRoomStatus' },
            registered: { type: 'n', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConferenceEntryServerNode.prototype.confRoomStatus;
    /** @type {?} */
    KalturaConferenceEntryServerNode.prototype.registered;
}
typesMappingStorage['KalturaConferenceEntryServerNode'] = KalturaConferenceEntryServerNode;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmZlcmVuY2VFbnRyeVNlcnZlck5vZGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb25mZXJlbmNlRW50cnlTZXJ2ZXJOb2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7OztBQU85RixNQUFNLHVDQUF3QyxTQUFRLHNCQUFzQjs7OztJQUt4RSxZQUFZLElBQTRDO1FBRXBELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxrQ0FBa0MsRUFBRTtZQUNyRixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQzVJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtTQUNuQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxrQ0FBa0MsQ0FBQyxHQUFHLGdDQUFnQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25mZXJlbmNlUm9vbVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUNvbmZlcmVuY2VSb29tU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGUsIEthbHR1cmFFbnRyeVNlcnZlck5vZGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTZXJ2ZXJOb2RlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29uZmVyZW5jZUVudHJ5U2VydmVyTm9kZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVudHJ5U2VydmVyTm9kZUFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29uZmVyZW5jZUVudHJ5U2VydmVyTm9kZSBleHRlbmRzIEthbHR1cmFFbnRyeVNlcnZlck5vZGUge1xuXG4gICAgcmVhZG9ubHkgY29uZlJvb21TdGF0dXMgOiBLYWx0dXJhQ29uZmVyZW5jZVJvb21TdGF0dXM7XG5cdHJlYWRvbmx5IHJlZ2lzdGVyZWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb25mZXJlbmNlRW50cnlTZXJ2ZXJOb2RlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb25mZXJlbmNlRW50cnlTZXJ2ZXJOb2RlJyB9LFxuXHRcdFx0XHRjb25mUm9vbVN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbmZlcmVuY2VSb29tU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFDb25mZXJlbmNlUm9vbVN0YXR1cycgfSxcblx0XHRcdFx0cmVnaXN0ZXJlZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb25mZXJlbmNlRW50cnlTZXJ2ZXJOb2RlJ10gPSBLYWx0dXJhQ29uZmVyZW5jZUVudHJ5U2VydmVyTm9kZTsiXX0=