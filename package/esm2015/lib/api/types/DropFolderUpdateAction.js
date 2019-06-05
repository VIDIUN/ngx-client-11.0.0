/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDropFolder } from './KalturaDropFolder';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DropFolderUpdateActionArgs() { }
/** @type {?} */
DropFolderUpdateActionArgs.prototype.dropFolderId;
/** @type {?} */
DropFolderUpdateActionArgs.prototype.dropFolder;
/**
 * Build request payload for service 'dropFolder' action 'update'.
 *
 * Usage: Update an existing KalturaDropFolder object
 *
 * Server response type:         KalturaDropFolder
 * Server failure response type: KalturaAPIException
 */
export class DropFolderUpdateAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaDropFolder', responseConstructor: KalturaDropFolder });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'dropfolder_dropfolder' },
            action: { type: 'c', default: 'update' },
            dropFolderId: { type: 'n' },
            dropFolder: { type: 'o', subTypeConstructor: KalturaDropFolder, subType: 'KalturaDropFolder' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DropFolderUpdateAction.prototype.dropFolderId;
    /** @type {?} */
    DropFolderUpdateAction.prototype.dropFolder;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcEZvbGRlclVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRHJvcEZvbGRlclVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSw2QkFBOEIsU0FBUSxjQUFpQzs7OztJQUt6RSxZQUFZLElBQWlDO1FBRXpDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDLENBQUM7S0FDdkg7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1NBQ3pGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJvcEZvbGRlciB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXInO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEcm9wRm9sZGVyVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGRyb3BGb2xkZXJJZCA6IG51bWJlcjtcblx0ZHJvcEZvbGRlciA6IEthbHR1cmFEcm9wRm9sZGVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZHJvcEZvbGRlcicgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgYW4gZXhpc3RpbmcgS2FsdHVyYURyb3BGb2xkZXIgb2JqZWN0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURyb3BGb2xkZXJcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERyb3BGb2xkZXJVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRHJvcEZvbGRlcj4ge1xuXG4gICAgZHJvcEZvbGRlcklkIDogbnVtYmVyO1xuXHRkcm9wRm9sZGVyIDogS2FsdHVyYURyb3BGb2xkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRHJvcEZvbGRlclVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURyb3BGb2xkZXInLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURyb3BGb2xkZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Ryb3Bmb2xkZXJfZHJvcGZvbGRlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0ZHJvcEZvbGRlcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRyb3BGb2xkZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEcm9wRm9sZGVyLCBzdWJUeXBlIDogJ0thbHR1cmFEcm9wRm9sZGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=