/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
/**
 * @record
 */
export function KalturaBusinessProcessNotificationTemplateArgs() { }
/** @type {?|undefined} */
KalturaBusinessProcessNotificationTemplateArgs.prototype.serverId;
/** @type {?|undefined} */
KalturaBusinessProcessNotificationTemplateArgs.prototype.processId;
/** @type {?|undefined} */
KalturaBusinessProcessNotificationTemplateArgs.prototype.mainObjectCode;
export class KalturaBusinessProcessNotificationTemplate extends KalturaEventNotificationTemplate {
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
            objectType: { type: 'c', default: 'KalturaBusinessProcessNotificationTemplate' },
            serverId: { type: 'n' },
            processId: { type: 's' },
            mainObjectCode: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBusinessProcessNotificationTemplate.prototype.serverId;
    /** @type {?} */
    KalturaBusinessProcessNotificationTemplate.prototype.processId;
    /** @type {?} */
    KalturaBusinessProcessNotificationTemplate.prototype.mainObjectCode;
}
typesMappingStorage['KalturaBusinessProcessNotificationTemplate'] = KalturaBusinessProcessNotificationTemplate;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0NBQWdDLEVBQXdDLE1BQU0sb0NBQW9DLENBQUM7Ozs7Ozs7Ozs7O0FBUzVILE1BQU0saURBQWtELFNBQVEsZ0NBQWdDOzs7O0lBTTVGLFlBQVksSUFBc0Q7UUFFOUQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRDQUE0QyxFQUFFO1lBQy9GLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3RCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNENBQTRDLENBQUMsR0FBRywwQ0FBMEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSwgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUFyZ3Mge1xuICAgIHNlcnZlcklkPyA6IG51bWJlcjtcblx0cHJvY2Vzc0lkPyA6IHN0cmluZztcblx0bWFpbk9iamVjdENvZGU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzTm90aWZpY2F0aW9uVGVtcGxhdGUgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZSB7XG5cbiAgICBzZXJ2ZXJJZCA6IG51bWJlcjtcblx0cHJvY2Vzc0lkIDogc3RyaW5nO1xuXHRtYWluT2JqZWN0Q29kZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZScgfSxcblx0XHRcdFx0c2VydmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJvY2Vzc0lkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1haW5PYmplY3RDb2RlIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NOb3RpZmljYXRpb25UZW1wbGF0ZSddID0gS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc05vdGlmaWNhdGlvblRlbXBsYXRlOyJdfQ==